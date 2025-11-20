import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

// University table
export const university = sqliteTable('university', {
  universityId: integer('university_id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  location: text('location').notNull(),
  establishedYear: integer('established_year').notNull(),
});

// Department table
export const department = sqliteTable('department', {
  departmentId: integer('department_id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  building: text('building').notNull(),
  hodId: integer('hod_id'),
  universityId: integer('university_id').references(() => university.universityId).notNull(),
});

// Faculty table
export const faculty = sqliteTable('faculty', {
  facultyId: integer('faculty_id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  designation: text('designation').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone').notNull(),
  departmentId: integer('department_id').references(() => department.departmentId).notNull(),
});

// Student table
export const student = sqliteTable('student', {
  studentId: integer('student_id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  dateOfBirth: text('date_of_birth').notNull(),
  gender: text('gender').notNull(),
  address: text('address').notNull(),
  phone: text('phone').notNull(),
  departmentId: integer('department_id').references(() => department.departmentId).notNull(),
});

// Course table
export const course = sqliteTable('course', {
  courseId: integer('course_id').primaryKey({ autoIncrement: true }),
  courseName: text('course_name').notNull(),
  credits: integer('credits').notNull(),
  semester: integer('semester').notNull(),
  departmentId: integer('department_id').references(() => department.departmentId).notNull(),
});

// Subject table
export const subject = sqliteTable('subject', {
  subjectId: integer('subject_id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  credits: integer('credits').notNull(),
  courseId: integer('course_id').references(() => course.courseId).notNull(),
  facultyId: integer('faculty_id').references(() => faculty.facultyId).notNull(),
});

// Classroom table
export const classroom = sqliteTable('classroom', {
  classroomId: integer('classroom_id').primaryKey({ autoIncrement: true }),
  roomNumber: text('room_number').notNull(),
  building: text('building').notNull(),
  capacity: integer('capacity').notNull(),
});

// Enrolled_In junction table
export const enrolledIn = sqliteTable('enrolled_in', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  studentId: integer('student_id').references(() => student.studentId).notNull(),
  courseId: integer('course_id').references(() => course.courseId).notNull(),
  grade: text('grade'),
});

// Scheduled_In junction table
export const scheduledIn = sqliteTable('scheduled_in', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  subjectId: integer('subject_id').references(() => subject.subjectId).notNull(),
  classroomId: integer('classroom_id').references(() => classroom.classroomId).notNull(),
  day: text('day').notNull(),
  timeSlot: text('time_slot').notNull(),
});

// Auth tables for better-auth
export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" })
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
  role: text("role", { enum: ["student", "teacher", "admin"] })
    .notNull()
    .default("student"),
});

export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  token: text("token").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = sqliteTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: integer("access_token_expires_at", {
    mode: "timestamp",
  }),
  refreshTokenExpiresAt: integer("refresh_token_expires_at", {
    mode: "timestamp",
  }),
  scope: text("scope"),
  password: text("password"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const verification = sqliteTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
});