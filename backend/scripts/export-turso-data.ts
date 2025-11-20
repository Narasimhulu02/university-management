// Script to export all data from Turso SQLite database
import { db } from '../db/index.js';
import * as schema from '../db/schema.js';
import fs from 'fs';

async function exportData() {
  try {
    console.log('📊 Starting data export from Turso...\n');

    const data: any = {};

    // Export universities
    console.log('Exporting universities...');
    data.universities = await db.select().from(schema.university);
    console.log(`✅ Exported ${data.universities.length} universities`);

    // Export departments
    console.log('Exporting departments...');
    data.departments = await db.select().from(schema.department);
    console.log(`✅ Exported ${data.departments.length} departments`);

    // Export faculty
    console.log('Exporting faculty...');
    data.faculty = await db.select().from(schema.faculty);
    console.log(`✅ Exported ${data.faculty.length} faculty members`);

    // Export students
    console.log('Exporting students...');
    data.students = await db.select().from(schema.student);
    console.log(`✅ Exported ${data.students.length} students`);

    // Export courses
    console.log('Exporting courses...');
    data.courses = await db.select().from(schema.course);
    console.log(`✅ Exported ${data.courses.length} courses`);

    // Export subjects
    console.log('Exporting subjects...');
    data.subjects = await db.select().from(schema.subject);
    console.log(`✅ Exported ${data.subjects.length} subjects`);

    // Export classrooms
    console.log('Exporting classrooms...');
    data.classrooms = await db.select().from(schema.classroom);
    console.log(`✅ Exported ${data.classrooms.length} classrooms`);

    // Export enrollments
    console.log('Exporting enrollments...');
    data.enrollments = await db.select().from(schema.enrolledIn);
    console.log(`✅ Exported ${data.enrollments.length} enrollments`);

    // Export schedules
    console.log('Exporting schedules...');
    data.schedules = await db.select().from(schema.scheduledIn);
    console.log(`✅ Exported ${data.schedules.length} schedules`);

    // Export auth data
    console.log('Exporting users...');
    data.users = await db.select().from(schema.user);
    console.log(`✅ Exported ${data.users.length} users`);

    console.log('Exporting sessions...');
    data.sessions = await db.select().from(schema.session);
    console.log(`✅ Exported ${data.sessions.length} sessions`);

    console.log('Exporting accounts...');
    data.accounts = await db.select().from(schema.account);
    console.log(`✅ Exported ${data.accounts.length} accounts`);

    console.log('Exporting verifications...');
    data.verifications = await db.select().from(schema.verification);
    console.log(`✅ Exported ${data.verifications.length} verifications`);

    // Write to file
    const filename = 'turso-data-export.json';
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`\n✅ Data exported successfully to ${filename}`);
    console.log(`\nSummary:`);
    console.log(`  Universities: ${data.universities.length}`);
    console.log(`  Departments: ${data.departments.length}`);
    console.log(`  Faculty: ${data.faculty.length}`);
    console.log(`  Students: ${data.students.length}`);
    console.log(`  Courses: ${data.courses.length}`);
    console.log(`  Subjects: ${data.subjects.length}`);
    console.log(`  Classrooms: ${data.classrooms.length}`);
    console.log(`  Enrollments: ${data.enrollments.length}`);
    console.log(`  Schedules: ${data.schedules.length}`);
    console.log(`  Users: ${data.users.length}`);
    console.log(`  Sessions: ${data.sessions.length}`);
    console.log(`  Accounts: ${data.accounts.length}`);
    console.log(`  Verifications: ${data.verifications.length}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Export failed:', error);
    process.exit(1);
  }
}

exportData();
