    -- Triggers for student validation
USE `university_management`;

DELIMITER $$

-- Trigger 1: Validate student date of birth (must be born on or before 2007-12-31)
-- Applies to INSERT
CREATE TRIGGER `trg_student_dob_check_insert`
BEFORE INSERT ON `student`
FOR EACH ROW
BEGIN
  -- date_of_birth is stored as VARCHAR, parse as date
  DECLARE dob_date DATE;
  SET dob_date = STR_TO_DATE(NEW.date_of_birth, '%Y-%m-%d');
  
  IF dob_date IS NULL THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Invalid date_of_birth format. Expected YYYY-MM-DD.';
  END IF;
  
  IF YEAR(dob_date) > 2007 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Student date of birth must not be later than 2007.';
  END IF;
END$$

-- Applies to UPDATE
CREATE TRIGGER `trg_student_dob_check_update`
BEFORE UPDATE ON `student`
FOR EACH ROW
BEGIN
  DECLARE dob_date DATE;
  SET dob_date = STR_TO_DATE(NEW.date_of_birth, '%Y-%m-%d');
  
  IF dob_date IS NULL THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Invalid date_of_birth format. Expected YYYY-MM-DD.';
  END IF;
  
  IF YEAR(dob_date) > 2007 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Student date of birth must not be later than 2007.';
  END IF;
END$$

-- Trigger 2: Validate department_id exists in department table
-- (Note: Foreign key already enforces this, but adding explicit trigger as requested)
-- Applies to INSERT
CREATE TRIGGER `trg_student_dept_check_insert`
BEFORE INSERT ON `student`
FOR EACH ROW
BEGIN
  DECLARE dept_count INT;
  
  SELECT COUNT(*) INTO dept_count
  FROM `department`
  WHERE `department_id` = NEW.department_id;
  
  IF dept_count = 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Department ID does not exist in the database.';
  END IF;
END$$

-- Applies to UPDATE
CREATE TRIGGER `trg_student_dept_check_update`
BEFORE UPDATE ON `student`
FOR EACH ROW
BEGIN
  DECLARE dept_count INT;
  
  SELECT COUNT(*) INTO dept_count
  FROM `department`
  WHERE `department_id` = NEW.department_id;
  
  IF dept_count = 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Department ID does not exist in the database.';
  END IF;
END$$

-- ========================================
-- STORED PROCEDURES
-- ========================================

-- Procedure 1: Add a new student with validation
CREATE PROCEDURE `sp_add_student`(
  IN p_name VARCHAR(255),
  IN p_email VARCHAR(255),
  IN p_dob VARCHAR(50),
  IN p_gender VARCHAR(10),
  IN p_address TEXT,
  IN p_phone VARCHAR(20),
  IN p_department_id INT,
  IN p_university_id INT
)
BEGIN
  DECLARE dob_date DATE;
  DECLARE dept_count INT;
  
  -- Validate date of birth format and year
  SET dob_date = STR_TO_DATE(p_dob, '%Y-%m-%d');
  IF dob_date IS NULL THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Invalid date_of_birth format. Expected YYYY-MM-DD.';
  END IF;
  
  IF YEAR(dob_date) > 2007 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Student date of birth must not be later than 2007.';
  END IF;
  
  -- Validate department exists
  SELECT COUNT(*) INTO dept_count FROM `department` WHERE `department_id` = p_department_id;
  IF dept_count = 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Department ID does not exist in the database.';
  END IF;
  
  -- Insert student
  INSERT INTO `student` (name, email, date_of_birth, gender, address, phone, department_id, university_id)
  VALUES (p_name, p_email, p_dob, p_gender, p_address, p_phone, p_department_id, p_university_id);
  
  SELECT LAST_INSERT_ID() AS student_id;
END$$

-- Procedure 2: Get all students by university
CREATE PROCEDURE `sp_get_students_by_university`(
  IN p_university_id INT
)
BEGIN
  SELECT 
    s.student_id,
    s.name,
    s.email,
    s.date_of_birth,
    s.gender,
    s.address,
    s.phone,
    s.department_id,
    d.name AS department_name,
    s.university_id
  FROM `student` s
  LEFT JOIN `department` d ON s.department_id = d.department_id
  WHERE s.university_id = p_university_id
  ORDER BY s.name;
END$$

-- Procedure 3: Get student enrollment details
CREATE PROCEDURE `sp_get_student_enrollments`(
  IN p_student_id INT
)
BEGIN
  SELECT 
    e.id AS enrollment_id,
    e.student_id,
    s.name AS student_name,
    e.course_id,
    c.course_name,
    e.grade,
    c.credits,
    c.semester
  FROM `enrolled_in` e
  JOIN `student` s ON e.student_id = s.student_id
  JOIN `course` c ON e.course_id = c.course_id
  WHERE e.student_id = p_student_id
  ORDER BY c.semester, c.course_name;
END$$

-- Procedure 4: Delete student with cascading cleanup
CREATE PROCEDURE `sp_delete_student`(
  IN p_student_id INT
)
BEGIN
  DECLARE student_exists INT;
  
  -- Check if student exists
  SELECT COUNT(*) INTO student_exists FROM `student` WHERE `student_id` = p_student_id;
  IF student_exists = 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Student not found.';
  END IF;
  
  -- Delete enrollments first
  DELETE FROM `enrolled_in` WHERE `student_id` = p_student_id;
  
  -- Delete student
  DELETE FROM `student` WHERE `student_id` = p_student_id;
  
  SELECT 'Student deleted successfully' AS message;
END$$

-- Procedure 5: Get department statistics
CREATE PROCEDURE `sp_get_department_stats`(
  IN p_department_id INT
)
BEGIN
  SELECT 
    d.department_id,
    d.name AS department_name,
    d.building,
    u.name AS university_name,
    (SELECT COUNT(*) FROM student WHERE department_id = p_department_id) AS total_students,
    (SELECT COUNT(*) FROM faculty WHERE department_id = p_department_id) AS total_faculty,
    (SELECT COUNT(*) FROM course WHERE department_id = p_department_id) AS total_courses
  FROM `department` d
  JOIN `university` u ON d.university_id = u.university_id
  WHERE d.department_id = p_department_id;
END$$

-- Procedure 6: Enroll student in course with validation
CREATE PROCEDURE `sp_enroll_student`(
  IN p_student_id INT,
  IN p_course_id INT
)
BEGIN
  DECLARE student_exists INT;
  DECLARE course_exists INT;
  DECLARE already_enrolled INT;
  DECLARE course_uni_id INT;
  DECLARE student_uni_id INT;
  
  -- Validate student exists
  SELECT COUNT(*), university_id INTO student_exists, student_uni_id 
  FROM `student` WHERE `student_id` = p_student_id;
  
  IF student_exists = 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Student does not exist.';
  END IF;
  
  -- Validate course exists
  SELECT COUNT(*), university_id INTO course_exists, course_uni_id 
  FROM `course` WHERE `course_id` = p_course_id;
  
  IF course_exists = 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Course does not exist.';
  END IF;
  
  -- Validate same university
  IF student_uni_id != course_uni_id THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Student and course must belong to the same university.';
  END IF;
  
  -- Check if already enrolled
  SELECT COUNT(*) INTO already_enrolled 
  FROM `enrolled_in` 
  WHERE `student_id` = p_student_id AND `course_id` = p_course_id;
  
  IF already_enrolled > 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Student is already enrolled in this course.';
  END IF;
  
  -- Enroll student
  INSERT INTO `enrolled_in` (student_id, course_id, university_id)
  VALUES (p_student_id, p_course_id, student_uni_id);
  
  SELECT LAST_INSERT_ID() AS enrollment_id;
END$$

DELIMITER ;

-- ========================================
-- FUNCTIONS
-- ========================================

DELIMITER $$

-- Function 1: Calculate student age from date of birth
CREATE FUNCTION `fn_calculate_age`(p_dob VARCHAR(50))
RETURNS INT
DETERMINISTIC
BEGIN
  DECLARE dob_date DATE;
  DECLARE age INT;
  
  SET dob_date = STR_TO_DATE(p_dob, '%Y-%m-%d');
  IF dob_date IS NULL THEN
    RETURN NULL;
  END IF;
  
  SET age = TIMESTAMPDIFF(YEAR, dob_date, CURDATE());
  RETURN age;
END$$

-- Function 2: Check if student is eligible (age >= 18)
CREATE FUNCTION `fn_is_student_eligible`(p_student_id INT)
RETURNS BOOLEAN
DETERMINISTIC
BEGIN
  DECLARE student_age INT;
  DECLARE student_dob VARCHAR(50);
  
  SELECT date_of_birth INTO student_dob FROM `student` WHERE student_id = p_student_id;
  
  IF student_dob IS NULL THEN
    RETURN FALSE;
  END IF;
  
  SET student_age = fn_calculate_age(student_dob);
  
  IF student_age >= 18 THEN
    RETURN TRUE;
  ELSE
    RETURN FALSE;
  END IF;
END$$

-- Function 3: Get total credits for a student
CREATE FUNCTION `fn_get_student_credits`(p_student_id INT)
RETURNS INT
DETERMINISTIC
BEGIN
  DECLARE total_credits INT;
  
  SELECT COALESCE(SUM(c.credits), 0) INTO total_credits
  FROM `enrolled_in` e
  JOIN `course` c ON e.course_id = c.course_id
  WHERE e.student_id = p_student_id;
  
  RETURN total_credits;
END$$

-- Function 4: Get student GPA (assuming A=4, B=3, C=2, D=1, F=0)
CREATE FUNCTION `fn_calculate_gpa`(p_student_id INT)
RETURNS DECIMAL(3,2)
DETERMINISTIC
BEGIN
  DECLARE total_points DECIMAL(10,2);
  DECLARE total_credits INT;
  DECLARE gpa DECIMAL(3,2);
  
  SELECT 
    COALESCE(SUM(
      CASE 
        WHEN e.grade = 'A' THEN c.credits * 4
        WHEN e.grade = 'B' THEN c.credits * 3
        WHEN e.grade = 'C' THEN c.credits * 2
        WHEN e.grade = 'D' THEN c.credits * 1
        ELSE 0
      END
    ), 0),
    COALESCE(SUM(c.credits), 0)
  INTO total_points, total_credits
  FROM `enrolled_in` e
  JOIN `course` c ON e.course_id = c.course_id
  WHERE e.student_id = p_student_id AND e.grade IS NOT NULL;
  
  IF total_credits = 0 THEN
    RETURN 0.00;
  END IF;
  
  SET gpa = total_points / total_credits;
  RETURN gpa;
END$$

-- Function 5: Count students in a department
CREATE FUNCTION `fn_count_department_students`(p_department_id INT)
RETURNS INT
DETERMINISTIC
BEGIN
  DECLARE student_count INT;
  
  SELECT COUNT(*) INTO student_count
  FROM `student`
  WHERE department_id = p_department_id;
  
  RETURN student_count;
END$$

-- Function 6: Get student's university name
CREATE FUNCTION `fn_get_student_university`(p_student_id INT)
RETURNS VARCHAR(255)
DETERMINISTIC
BEGIN
  DECLARE uni_name VARCHAR(255);
  
  SELECT u.name INTO uni_name
  FROM `student` s
  JOIN `department` d ON s.department_id = d.department_id
  JOIN `university` u ON d.university_id = u.university_id
  WHERE s.student_id = p_student_id;
  
  RETURN uni_name;
END$$

-- Function 7: Check if student can enroll (max 6 courses per semester)
CREATE FUNCTION `fn_can_student_enroll`(p_student_id INT)
RETURNS BOOLEAN
DETERMINISTIC
BEGIN
  DECLARE enrolled_count INT;
  
  SELECT COUNT(*) INTO enrolled_count
  FROM `enrolled_in`
  WHERE student_id = p_student_id;
  
  IF enrolled_count < 6 THEN
    RETURN TRUE;
  ELSE
    RETURN FALSE;
  END IF;
END$$

-- Function 8: Get department capacity utilization percentage
CREATE FUNCTION `fn_department_utilization`(p_department_id INT)
RETURNS DECIMAL(5,2)
DETERMINISTIC
BEGIN
  DECLARE student_count INT;
  DECLARE faculty_count INT;
  DECLARE ratio DECIMAL(5,2);
  
  SELECT COUNT(*) INTO student_count FROM `student` WHERE department_id = p_department_id;
  SELECT COUNT(*) INTO faculty_count FROM `faculty` WHERE department_id = p_department_id;
  
  IF faculty_count = 0 THEN
    RETURN 0.00;
  END IF;
  
  SET ratio = student_count / faculty_count;
  RETURN ratio;
END$$

DELIMITER ;

-- Verify triggers, procedures, and functions created
SHOW TRIGGERS WHERE `Table` = 'student';
SHOW PROCEDURE STATUS WHERE Db = 'university_management';
SHOW FUNCTION STATUS WHERE Db = 'university_management';
