-- University Management System Database Schema
-- Based on ER Diagram and Relational Schema

-- Drop existing tables if they exist (in reverse order of dependencies)
DROP TABLE IF EXISTS Scheduled_In;
DROP TABLE IF EXISTS Enrolled_In;
DROP TABLE IF EXISTS Subject;
DROP TABLE IF EXISTS Course;
DROP TABLE IF EXISTS Student;
DROP TABLE IF EXISTS Faculty;
DROP TABLE IF EXISTS Department;
DROP TABLE IF EXISTS Classroom;
DROP TABLE IF EXISTS University;
DROP TABLE IF EXISTS account;
DROP TABLE IF EXISTS verification;
DROP TABLE IF EXISTS session;
DROP TABLE IF EXISTS user;

-- Drop existing triggers if they exist
DROP TRIGGER IF EXISTS validate_password_insert;
DROP TRIGGER IF EXISTS validate_password_update;
DROP TRIGGER IF EXISTS validate_email_format;
DROP TRIGGER IF EXISTS validate_student_age;
DROP TRIGGER IF EXISTS validate_phone_number;
DROP TRIGGER IF EXISTS prevent_schedule_conflict;
DROP TRIGGER IF EXISTS validate_grade;
DROP TRIGGER IF EXISTS validate_established_year;
DROP TRIGGER IF EXISTS validate_semester_range;

-- Create User table (for authentication)
CREATE TABLE user (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    email_verified INTEGER NOT NULL DEFAULT 0,
    image TEXT,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,
    role TEXT NOT NULL DEFAULT 'student' CHECK(role IN ('student', 'teacher', 'admin'))
);

-- Create Session table (for authentication)
CREATE TABLE session (
    id TEXT PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    token TEXT NOT NULL UNIQUE,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,
    ip_address TEXT,
    user_agent TEXT,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

-- Create Account table (for authentication with password)
CREATE TABLE account (
    id TEXT PRIMARY KEY,
    account_id TEXT NOT NULL,
    provider_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    access_token TEXT,
    refresh_token TEXT,
    id_token TEXT,
    access_token_expires_at INTEGER,
    refresh_token_expires_at INTEGER,
    scope TEXT,
    password TEXT,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

-- Create Verification table (for email verification)
CREATE TABLE verification (
    id TEXT PRIMARY KEY,
    identifier TEXT NOT NULL,
    value TEXT NOT NULL,
    expires_at INTEGER NOT NULL,
    created_at INTEGER,
    updated_at INTEGER
);

-- Create University table
CREATE TABLE University (
    university_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    established_year INTEGER NOT NULL
);

-- Create Department table
CREATE TABLE Department (
    department_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    building TEXT NOT NULL,
    hod_id INTEGER,
    university_id INTEGER NOT NULL,
    FOREIGN KEY (university_id) REFERENCES University(university_id) ON DELETE CASCADE
);

-- Create Faculty table
CREATE TABLE Faculty (
    faculty_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    designation TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES Department(department_id) ON DELETE CASCADE
);

-- Add foreign key constraint for HOD in Department table
-- Note: This creates a circular reference handled at application level

-- Create Student table
CREATE TABLE Student (
    student_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    date_of_birth DATE NOT NULL,
    gender TEXT CHECK(gender IN ('Male', 'Female', 'Other')),
    address TEXT,
    phone TEXT,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES Department(department_id) ON DELETE CASCADE
);

-- Create Course table
CREATE TABLE Course (
    course_id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_name TEXT NOT NULL,
    credits INTEGER NOT NULL CHECK(credits > 0),
    semester INTEGER NOT NULL CHECK(semester BETWEEN 1 AND 8),
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES Department(department_id) ON DELETE CASCADE
);

-- Create Subject table
CREATE TABLE Subject (
    subject_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    credits INTEGER NOT NULL CHECK(credits > 0),
    course_id INTEGER NOT NULL,
    faculty_id INTEGER NOT NULL,
    FOREIGN KEY (course_id) REFERENCES Course(course_id) ON DELETE CASCADE,
    FOREIGN KEY (faculty_id) REFERENCES Faculty(faculty_id) ON DELETE CASCADE
);

-- Create Classroom table
CREATE TABLE Classroom (
    classroom_id INTEGER PRIMARY KEY AUTOINCREMENT,
    room_number TEXT NOT NULL UNIQUE,
    building TEXT NOT NULL,
    capacity INTEGER NOT NULL CHECK(capacity > 0)
);

-- Create Enrolled_In table (Many-to-Many relationship between Student and Course)
CREATE TABLE Enrolled_In (
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    grade TEXT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Student(student_id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Course(course_id) ON DELETE CASCADE
);

-- Create Scheduled_In table (Many-to-Many relationship between Subject and Classroom)
CREATE TABLE Scheduled_In (
    subject_id INTEGER NOT NULL,
    classroom_id INTEGER NOT NULL,
    day TEXT NOT NULL CHECK(day IN ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')),
    time_slot TEXT NOT NULL,
    PRIMARY KEY (subject_id, classroom_id, day, time_slot),
    FOREIGN KEY (subject_id) REFERENCES Subject(subject_id) ON DELETE CASCADE,
    FOREIGN KEY (classroom_id) REFERENCES Classroom(classroom_id) ON DELETE CASCADE
);

-- =====================================================
-- TRIGGERS SECTION
-- =====================================================

-- Trigger 1: Password Validation (INSERT) - Must contain uppercase, lowercase, and number
CREATE TRIGGER validate_password_insert
BEFORE INSERT ON account
FOR EACH ROW
WHEN NEW.password IS NOT NULL
BEGIN
    SELECT CASE
        -- Check for at least one uppercase letter
        WHEN NOT EXISTS (
            SELECT 1 WHERE NEW.password GLOB '*[A-Z]*'
        ) THEN RAISE(ABORT, 'Password must contain at least one uppercase letter')
        -- Check for at least one lowercase letter
        WHEN NOT EXISTS (
            SELECT 1 WHERE NEW.password GLOB '*[a-z]*'
        ) THEN RAISE(ABORT, 'Password must contain at least one lowercase letter')
        -- Check for at least one number
        WHEN NOT EXISTS (
            SELECT 1 WHERE NEW.password GLOB '*[0-9]*'
        ) THEN RAISE(ABORT, 'Password must contain at least one number')
        -- Check minimum length (8 characters)
        WHEN LENGTH(NEW.password) < 8
        THEN RAISE(ABORT, 'Password must be at least 8 characters long')
    END;
END;

-- Trigger 2: Password Validation (UPDATE) - Must contain uppercase, lowercase, and number
CREATE TRIGGER validate_password_update
BEFORE UPDATE ON account
FOR EACH ROW
WHEN NEW.password IS NOT NULL AND NEW.password != OLD.password
BEGIN
    SELECT CASE
        -- Check for at least one uppercase letter
        WHEN NOT EXISTS (
            SELECT 1 WHERE NEW.password GLOB '*[A-Z]*'
        ) THEN RAISE(ABORT, 'Password must contain at least one uppercase letter')
        -- Check for at least one lowercase letter
        WHEN NOT EXISTS (
            SELECT 1 WHERE NEW.password GLOB '*[a-z]*'
        ) THEN RAISE(ABORT, 'Password must contain at least one lowercase letter')
        -- Check for at least one number
        WHEN NOT EXISTS (
            SELECT 1 WHERE NEW.password GLOB '*[0-9]*'
        ) THEN RAISE(ABORT, 'Password must contain at least one number')
        -- Check minimum length (8 characters)
        WHEN LENGTH(NEW.password) < 8
        THEN RAISE(ABORT, 'Password must be at least 8 characters long')
    END;
END;

-- Trigger 3: Email Format Validation
CREATE TRIGGER validate_email_format
BEFORE INSERT ON user
FOR EACH ROW
BEGIN
    SELECT CASE
        WHEN NEW.email NOT LIKE '%_@__%.__%'
        THEN RAISE(ABORT, 'Invalid email format')
    END;
END;

-- Trigger 4: Student Age Validation (must be at least 15 years old)
CREATE TRIGGER validate_student_age
BEFORE INSERT ON Student
FOR EACH ROW
BEGIN
    SELECT CASE
        WHEN (julianday('now') - julianday(NEW.date_of_birth)) / 365.25 < 15
        THEN RAISE(ABORT, 'Student must be at least 15 years old')
    END;
END;

-- Trigger 5: Phone Number Validation (must be 10 digits)
CREATE TRIGGER validate_phone_number
BEFORE INSERT ON Student
FOR EACH ROW
WHEN NEW.phone IS NOT NULL
BEGIN
    SELECT CASE
        WHEN LENGTH(REPLACE(REPLACE(REPLACE(NEW.phone, '-', ''), ' ', ''), '+', '')) < 10
        THEN RAISE(ABORT, 'Phone number must contain at least 10 digits')
    END;
END;

-- Trigger 6: Prevent Schedule Conflicts (same classroom, day, and time)
CREATE TRIGGER prevent_schedule_conflict
BEFORE INSERT ON Scheduled_In
FOR EACH ROW
BEGIN
    SELECT CASE
        WHEN EXISTS (
            SELECT 1 FROM Scheduled_In 
            WHERE classroom_id = NEW.classroom_id 
            AND day = NEW.day 
            AND time_slot = NEW.time_slot
            AND subject_id != NEW.subject_id
        )
        THEN RAISE(ABORT, 'Schedule conflict: Classroom already booked for this time slot')
    END;
END;

-- Trigger 7: Grade Validation
CREATE TRIGGER validate_grade
BEFORE INSERT ON Enrolled_In
FOR EACH ROW
WHEN NEW.grade IS NOT NULL
BEGIN
    SELECT CASE
        WHEN NEW.grade NOT IN ('A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F', 'I', 'W', 'P')
        THEN RAISE(ABORT, 'Invalid grade. Must be one of: A+, A, A-, B+, B, B-, C+, C, C-, D, F, I, W, P')
    END;
END;

-- Trigger 8: Established Year Validation (cannot be in the future)
CREATE TRIGGER validate_established_year
BEFORE INSERT ON University
FOR EACH ROW
BEGIN
    SELECT CASE
        WHEN NEW.established_year > CAST(strftime('%Y', 'now') AS INTEGER)
        THEN RAISE(ABORT, 'Established year cannot be in the future')
        WHEN NEW.established_year < 1800
        THEN RAISE(ABORT, 'Established year must be 1800 or later')
    END;
END;

-- Trigger 9: Semester Range Validation for Course Updates
CREATE TRIGGER validate_semester_range
BEFORE UPDATE ON Course
FOR EACH ROW
BEGIN
    SELECT CASE
        WHEN NEW.semester < 1 OR NEW.semester > 8
        THEN RAISE(ABORT, 'Semester must be between 1 and 8')
    END;
END;

-- =====================================================
-- END OF TRIGGERS SECTION
-- =====================================================

-- Create indexes for better query performance
CREATE INDEX idx_department_university ON Department(university_id);
CREATE INDEX idx_faculty_department ON Faculty(department_id);
CREATE INDEX idx_student_department ON Student(department_id);
CREATE INDEX idx_course_department ON Course(department_id);
CREATE INDEX idx_subject_course ON Subject(course_id);
CREATE INDEX idx_subject_faculty ON Subject(faculty_id);
CREATE INDEX idx_enrolled_student ON Enrolled_In(student_id);
CREATE INDEX idx_enrolled_course ON Enrolled_In(course_id);
CREATE INDEX idx_scheduled_subject ON Scheduled_In(subject_id);
CREATE INDEX idx_scheduled_classroom ON Scheduled_In(classroom_id);

-- Insert sample data for demonstration

-- Universities
INSERT INTO University (name, location, established_year) VALUES
('PES University', 'Bangalore', 1972),
('Indian Institute of Science', 'Bangalore', 1909),
('National Institute of Technology', 'Karnataka', 1960);

-- Departments
INSERT INTO Department (name, building, university_id) VALUES
('Computer Science', 'MRD Block', 1),
('Electronics and Communication', 'ECE Block', 1),
('Mechanical Engineering', 'Mech Block', 1),
('Information Science', 'IS Block', 1);

-- Faculty
INSERT INTO Faculty (name, designation, email, phone, department_id) VALUES
('Dr. Rajesh Kumar', 'Professor', 'rajesh.kumar@pes.edu', '9876543210', 1),
('Dr. Priya Sharma', 'Associate Professor', 'priya.sharma@pes.edu', '9876543211', 1),
('Dr. Amit Patel', 'Assistant Professor', 'amit.patel@pes.edu', '9876543212', 2),
('Dr. Sunita Rao', 'Professor', 'sunita.rao@pes.edu', '9876543213', 2),
('Dr. Vikram Singh', 'Associate Professor', 'vikram.singh@pes.edu', '9876543214', 3),
('Dr. Anjali Mehta', 'Assistant Professor', 'anjali.mehta@pes.edu', '9876543215', 4);

-- Update HOD for departments
UPDATE Department SET hod_id = 1 WHERE department_id = 1;
UPDATE Department SET hod_id = 3 WHERE department_id = 2;
UPDATE Department SET hod_id = 5 WHERE department_id = 3;
UPDATE Department SET hod_id = 6 WHERE department_id = 4;

-- Students
INSERT INTO Student (name, email, date_of_birth, gender, address, phone, department_id) VALUES
('Arjun Reddy', 'arjun.reddy@pes.edu', '2003-05-15', 'Male', 'Bangalore, Karnataka', '9123456780', 1),
('Sneha Kapoor', 'sneha.kapoor@pes.edu', '2003-08-22', 'Female', 'Mumbai, Maharashtra', '9123456781', 1),
('Karan Malhotra', 'karan.malhotra@pes.edu', '2003-03-10', 'Male', 'Delhi, Delhi', '9123456782', 2),
('Priyanka Iyer', 'priyanka.iyer@pes.edu', '2003-11-30', 'Female', 'Chennai, Tamil Nadu', '9123456783', 2),
('Rahul Verma', 'rahul.verma@pes.edu', '2003-07-18', 'Male', 'Pune, Maharashtra', '9123456784', 3),
('Ananya Das', 'ananya.das@pes.edu', '2003-09-25', 'Female', 'Kolkata, West Bengal', '9123456785', 4);

-- Courses
INSERT INTO Course (course_name, credits, semester, department_id) VALUES
('Data Structures and Algorithms', 4, 3, 1),
('Database Management Systems', 4, 5, 1),
('Operating Systems', 4, 5, 1),
('Digital Electronics', 3, 3, 2),
('Signal Processing', 4, 5, 2),
('Thermodynamics', 3, 3, 3),
('Web Technologies', 4, 5, 4);

-- Subjects
INSERT INTO Subject (name, credits, course_id, faculty_id) VALUES
('Advanced Data Structures', 2, 1, 1),
('Algorithm Design', 2, 1, 2),
('SQL and NoSQL Databases', 2, 2, 1),
('Database Transactions', 2, 2, 2),
('Process Management', 2, 3, 2),
('Memory Management', 2, 3, 1),
('Combinational Circuits', 2, 4, 3),
('Sequential Circuits', 1, 4, 4),
('Fourier Analysis', 2, 5, 4),
('Filter Design', 2, 5, 3),
('Heat Transfer', 2, 6, 5),
('Energy Systems', 1, 6, 5),
('HTML and CSS', 2, 7, 6),
('JavaScript Frameworks', 2, 7, 6);

-- Classrooms
INSERT INTO Classroom (room_number, building, capacity) VALUES
('101', 'MRD Block', 60),
('102', 'MRD Block', 80),
('201', 'MRD Block', 100),
('301', 'ECE Block', 70),
('302', 'ECE Block', 50),
('401', 'Mech Block', 60),
('501', 'IS Block', 90);

-- Enrolled_In (Student enrollments)
INSERT INTO Enrolled_In (student_id, course_id, grade) VALUES
(1, 1, 'A'),
(1, 2, 'A+'),
(2, 1, 'B+'),
(2, 3, 'A'),
(3, 4, 'A'),
(3, 5, 'B'),
(4, 4, 'A+'),
(4, 5, 'A'),
(5, 6, 'B+'),
(6, 7, 'A');

-- Scheduled_In (Class schedules)
INSERT INTO Scheduled_In (subject_id, classroom_id, day, time_slot) VALUES
(1, 1, 'Monday', '9:00-10:00'),
(2, 1, 'Tuesday', '10:00-11:00'),
(3, 2, 'Monday', '11:00-12:00'),
(4, 2, 'Wednesday', '9:00-10:00'),
(5, 1, 'Thursday', '2:00-3:00'),
(6, 2, 'Friday', '9:00-10:00'),
(7, 4, 'Monday', '9:00-10:00'),
(8, 4, 'Tuesday', '11:00-12:00'),
(9, 5, 'Wednesday', '2:00-3:00'),
(10, 4, 'Thursday', '9:00-10:00'),
(11, 6, 'Monday', '10:00-11:00'),
(12, 6, 'Tuesday', '2:00-3:00'),
(13, 7, 'Monday', '2:00-3:00'),
(14, 7, 'Wednesday', '3:00-4:00');

-- Create views for common queries

-- View: Student details with department and university
CREATE VIEW student_details AS
SELECT 
    s.student_id,
    s.name AS student_name,
    s.email,
    s.date_of_birth,
    s.gender,
    s.address,
    s.phone,
    d.name AS department_name,
    u.name AS university_name
FROM Student s
JOIN Department d ON s.department_id = d.department_id
JOIN University u ON d.university_id = u.university_id;

-- View: Faculty details with department
CREATE VIEW faculty_details AS
SELECT 
    f.faculty_id,
    f.name AS faculty_name,
    f.designation,
    f.email,
    f.phone,
    d.name AS department_name,
    u.name AS university_name
FROM Faculty f
JOIN Department d ON f.department_id = d.department_id
JOIN University u ON d.university_id = u.university_id;

-- View: Course enrollments with student and course details
CREATE VIEW course_enrollments AS
SELECT 
    e.student_id,
    s.name AS student_name,
    e.course_id,
    c.course_name,
    e.grade,
    c.credits,
    c.semester,
    d.name AS department_name
FROM Enrolled_In e
JOIN Student s ON e.student_id = s.student_id
JOIN Course c ON e.course_id = c.course_id
JOIN Department d ON c.department_id = d.department_id;

-- View: Class schedules with all details
CREATE VIEW class_schedule AS
SELECT 
    sc.day,
    sc.time_slot,
    sub.name AS subject_name,
    c.course_name,
    f.name AS faculty_name,
    cl.room_number,
    cl.building,
    cl.capacity
FROM Scheduled_In sc
JOIN Subject sub ON sc.subject_id = sub.subject_id
JOIN Course c ON sub.course_id = c.course_id
JOIN Faculty f ON sub.faculty_id = f.faculty_id
JOIN Classroom cl ON sc.classroom_id = cl.classroom_id
ORDER BY sc.day, sc.time_slot;