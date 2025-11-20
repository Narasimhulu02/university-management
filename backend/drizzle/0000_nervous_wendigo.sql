CREATE TABLE `classroom` (
	`classroom_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`room_number` text NOT NULL,
	`building` text NOT NULL,
	`capacity` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `course` (
	`course_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`course_name` text NOT NULL,
	`credits` integer NOT NULL,
	`semester` integer NOT NULL,
	`department_id` integer NOT NULL,
	FOREIGN KEY (`department_id`) REFERENCES `department`(`department_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `department` (
	`department_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`building` text NOT NULL,
	`hod_id` integer,
	`university_id` integer NOT NULL,
	FOREIGN KEY (`university_id`) REFERENCES `university`(`university_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `enrolled_in` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`student_id` integer NOT NULL,
	`course_id` integer NOT NULL,
	`grade` text,
	FOREIGN KEY (`student_id`) REFERENCES `student`(`student_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`course_id`) REFERENCES `course`(`course_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `faculty` (
	`faculty_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`designation` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`department_id` integer NOT NULL,
	FOREIGN KEY (`department_id`) REFERENCES `department`(`department_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `faculty_email_unique` ON `faculty` (`email`);--> statement-breakpoint
CREATE TABLE `scheduled_in` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`subject_id` integer NOT NULL,
	`classroom_id` integer NOT NULL,
	`day` text NOT NULL,
	`time_slot` text NOT NULL,
	FOREIGN KEY (`subject_id`) REFERENCES `subject`(`subject_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`classroom_id`) REFERENCES `classroom`(`classroom_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `student` (
	`student_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`date_of_birth` text NOT NULL,
	`gender` text NOT NULL,
	`address` text NOT NULL,
	`phone` text NOT NULL,
	`department_id` integer NOT NULL,
	FOREIGN KEY (`department_id`) REFERENCES `department`(`department_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `student_email_unique` ON `student` (`email`);--> statement-breakpoint
CREATE TABLE `subject` (
	`subject_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`credits` integer NOT NULL,
	`course_id` integer NOT NULL,
	`faculty_id` integer NOT NULL,
	FOREIGN KEY (`course_id`) REFERENCES `course`(`course_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`faculty_id`) REFERENCES `faculty`(`faculty_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `university` (
	`university_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`location` text NOT NULL,
	`established_year` integer NOT NULL
);
