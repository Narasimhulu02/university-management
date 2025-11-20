-- Rebuild database with university_id on all entities
DROP DATABASE IF EXISTS `university_management`;
CREATE DATABASE `university_management` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `university_management`;

-- University
CREATE TABLE `university` (
  `university_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `established_year` INT NOT NULL,
  PRIMARY KEY (`university_id`)
) ENGINE=InnoDB;

-- Department (always belongs to a university)
CREATE TABLE `department` (
  `department_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `building` VARCHAR(255) NOT NULL,
  `hod_id` INT NULL,
  `university_id` INT NOT NULL,
  PRIMARY KEY (`department_id`),
  KEY `idx_department_university` (`university_id`),
  CONSTRAINT `fk_department_university` FOREIGN KEY (`university_id`) REFERENCES `university`(`university_id`) ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- Classroom (attach to a university directly)
CREATE TABLE `classroom` (
  `classroom_id` INT NOT NULL AUTO_INCREMENT,
  `room_number` VARCHAR(50) NOT NULL,
  `building` VARCHAR(255) NOT NULL,
  `capacity` INT NOT NULL,
  `university_id` INT NOT NULL,
  PRIMARY KEY (`classroom_id`),
  UNIQUE KEY `idx_classroom_uni_build_room` (`university_id`, `building`, `room_number`),
  CONSTRAINT `fk_classroom_university` FOREIGN KEY (`university_id`) REFERENCES `university`(`university_id`) ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- Faculty (attached to department; include passive university_id for direct scoping)
CREATE TABLE `faculty` (
  `faculty_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `designation` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `department_id` INT NOT NULL,
  `university_id` INT NULL,
  PRIMARY KEY (`faculty_id`),
  UNIQUE KEY `uniq_faculty_email` (`email`),
  KEY `idx_faculty_department` (`department_id`),
  KEY `idx_faculty_university` (`university_id`),
  CONSTRAINT `fk_faculty_department` FOREIGN KEY (`department_id`) REFERENCES `department`(`department_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT `fk_faculty_university` FOREIGN KEY (`university_id`) REFERENCES `university`(`university_id`) ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB;

-- Student (attached to department; include passive university_id)
CREATE TABLE `student` (
  `student_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `date_of_birth` VARCHAR(50) NOT NULL,
  `gender` VARCHAR(10) NOT NULL,
  `address` TEXT NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `department_id` INT NOT NULL,
  `university_id` INT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `uniq_student_email` (`email`),
  KEY `idx_student_department` (`department_id`),
  KEY `idx_student_university` (`university_id`),
  CONSTRAINT `fk_student_department` FOREIGN KEY (`department_id`) REFERENCES `department`(`department_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT `fk_student_university` FOREIGN KEY (`university_id`) REFERENCES `university`(`university_id`) ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB;

-- Course (attached to department; include passive university_id)
CREATE TABLE `course` (
  `course_id` INT NOT NULL AUTO_INCREMENT,
  `course_name` VARCHAR(255) NOT NULL,
  `credits` INT NOT NULL,
  `semester` INT NOT NULL,
  `department_id` INT NOT NULL,
  `university_id` INT NULL,
  PRIMARY KEY (`course_id`),
  KEY `idx_course_department` (`department_id`),
  KEY `idx_course_university` (`university_id`),
  CONSTRAINT `fk_course_department` FOREIGN KEY (`department_id`) REFERENCES `department`(`department_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT `fk_course_university` FOREIGN KEY (`university_id`) REFERENCES `university`(`university_id`) ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB;

-- Subject (attached to course and faculty; include passive university_id)
CREATE TABLE `subject` (
  `subject_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `credits` INT NOT NULL,
  `course_id` INT NOT NULL,
  `faculty_id` INT NOT NULL,
  `university_id` INT NULL,
  PRIMARY KEY (`subject_id`),
  KEY `idx_subject_course` (`course_id`),
  KEY `idx_subject_faculty` (`faculty_id`),
  KEY `idx_subject_university` (`university_id`),
  CONSTRAINT `fk_subject_course` FOREIGN KEY (`course_id`) REFERENCES `course`(`course_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT `fk_subject_faculty` FOREIGN KEY (`faculty_id`) REFERENCES `faculty`(`faculty_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT `fk_subject_university` FOREIGN KEY (`university_id`) REFERENCES `university`(`university_id`) ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB;

-- Enrolled_In (attach passive university_id)
CREATE TABLE `enrolled_in` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `student_id` INT NOT NULL,
  `course_id` INT NOT NULL,
  `grade` VARCHAR(5) NULL,
  `university_id` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_enrollment_pair` (`student_id`, `course_id`),
  KEY `idx_enroll_student` (`student_id`),
  KEY `idx_enroll_course` (`course_id`),
  KEY `idx_enroll_university` (`university_id`),
  CONSTRAINT `fk_enroll_student` FOREIGN KEY (`student_id`) REFERENCES `student`(`student_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT `fk_enroll_course` FOREIGN KEY (`course_id`) REFERENCES `course`(`course_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT `fk_enroll_university` FOREIGN KEY (`university_id`) REFERENCES `university`(`university_id`) ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB;

-- Scheduled_In (attach passive university_id)
CREATE TABLE `scheduled_in` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `subject_id` INT NOT NULL,
  `classroom_id` INT NOT NULL,
  `day` VARCHAR(20) NOT NULL,
  `time_slot` VARCHAR(50) NOT NULL,
  `university_id` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_schedule_uni_day_time` (`university_id`, `day`, `time_slot`),
  KEY `idx_schedule_subject` (`subject_id`),
  KEY `idx_schedule_classroom` (`classroom_id`),
  KEY `idx_schedule_university` (`university_id`),
  CONSTRAINT `fk_schedule_subject` FOREIGN KEY (`subject_id`) REFERENCES `subject`(`subject_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT `fk_schedule_classroom` FOREIGN KEY (`classroom_id`) REFERENCES `classroom`(`classroom_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT `fk_schedule_university` FOREIGN KEY (`university_id`) REFERENCES `university`(`university_id`) ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB;
