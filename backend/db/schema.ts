import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { mysqlTable, int, varchar, boolean, timestamp, text as mysqlText } from 'drizzle-orm/mysql-core';

// University table
export const university = mysqlTable('university', {
  universityId: int('university_id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  location: varchar('location', { length: 255 }).notNull(),
  establishedYear: int('established_year').notNull(),
});

// Department table
export const department = mysqlTable('department', {
  departmentId: int('department_id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  building: varchar('building', { length: 255 }).notNull(),
  hodId: int('hod_id'),
  universityId: int('university_id').references(() => university.universityId).notNull(),
});

// Faculty table
export const faculty = mysqlTable('faculty', {
  facultyId: int('faculty_id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  designation: varchar('designation', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  phone: varchar('phone', { length: 20 }).notNull(),
  departmentId: int('department_id').references(() => department.departmentId).notNull(),
  universityId: int('university_id').references(() => university.universityId),
});

// Student table
export const student = mysqlTable('student', {
  studentId: int('student_id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  dateOfBirth: varchar('date_of_birth', { length: 50 }).notNull(),
  gender: varchar('gender', { length: 10 }).notNull(),
  address: mysqlText('address').notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  departmentId: int('department_id').references(() => department.departmentId).notNull(),
  universityId: int('university_id').references(() => university.universityId),
});

// Course table
export const course = mysqlTable('course', {
  courseId: int('course_id').primaryKey().autoincrement(),
  courseName: varchar('course_name', { length: 255 }).notNull(),
  credits: int('credits').notNull(),
  semester: int('semester').notNull(),
  departmentId: int('department_id').references(() => department.departmentId).notNull(),
  universityId: int('university_id').references(() => university.universityId),
});

// Subject table
export const subject = mysqlTable('subject', {
  subjectId: int('subject_id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  credits: int('credits').notNull(),
  courseId: int('course_id').references(() => course.courseId).notNull(),
  facultyId: int('faculty_id').references(() => faculty.facultyId).notNull(),
  universityId: int('university_id').references(() => university.universityId),
});

// Classroom table
export const classroom = mysqlTable('classroom', {
  classroomId: int('classroom_id').primaryKey().autoincrement(),
  roomNumber: varchar('room_number', { length: 50 }).notNull(),
  building: varchar('building', { length: 255 }).notNull(),
  capacity: int('capacity').notNull(),
  // Attach classrooms to a university (nullable in DB for safe migration)
  universityId: int('university_id').references(() => university.universityId),
});

// Enrolled_In junction table
export const enrolledIn = mysqlTable('enrolled_in', {
  id: int('id').primaryKey().autoincrement(),
  studentId: int('student_id').references(() => student.studentId).notNull(),
  courseId: int('course_id').references(() => course.courseId).notNull(),
  grade: varchar('grade', { length: 5 }),
  universityId: int('university_id').references(() => university.universityId),
});

// Scheduled_In junction table
export const scheduledIn = mysqlTable('scheduled_in', {
  id: int('id').primaryKey().autoincrement(),
  subjectId: int('subject_id').references(() => subject.subjectId).notNull(),
  classroomId: int('classroom_id').references(() => classroom.classroomId).notNull(),
  day: varchar('day', { length: 20 }).notNull(),
  timeSlot: varchar('time_slot', { length: 50 }).notNull(),
  universityId: int('university_id').references(() => university.universityId),
});

// Auth tables for better-auth (MySQL version)
export const user = mysqlTable("user", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  image: varchar("image", { length: 500 }),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
  role: varchar("role", { length: 20, enum: ["student", "teacher", "admin"] })
    .$defaultFn(() => "student")
    .notNull(),
});

export const session = mysqlTable("session", {
  id: varchar("id", { length: 255 }).primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: varchar("token", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
  ipAddress: varchar("ip_address", { length: 100 }),
  userAgent: mysqlText("user_agent"),
  userId: varchar("user_id", { length: 255 })
    .references(() => user.id)
    .notNull(),
});

export const account = mysqlTable("account", {
  id: varchar("id", { length: 255 }).primaryKey(),
  accountId: varchar("account_id", { length: 255 }).notNull(),
  providerId: varchar("provider_id", { length: 255 }).notNull(),
  userId: varchar("user_id", { length: 255 })
    .references(() => user.id)
    .notNull(),
  accessToken: mysqlText("access_token"),
  refreshToken: mysqlText("refresh_token"),
  idToken: mysqlText("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: mysqlText("scope"),
  password: varchar("password", { length: 255 }),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});

export const verification = mysqlTable("verification", {
  id: varchar("id", { length: 255 }).primaryKey(),
  identifier: varchar("identifier", { length: 255 }).notNull(),
  value: varchar("value", { length: 255 }).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date()),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date()),
});
