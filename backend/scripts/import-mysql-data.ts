// Script to import data from JSON export to MySQL database
import { db } from '../db/index-mysql.js';
import * as schema from '../db/schema-mysql.js';
import fs from 'fs';
import { sql } from 'drizzle-orm';

async function importData() {
  try {
    console.log('📊 Starting data import to MySQL...\n');

    // Read exported data
    const filename = 'turso-data-export.json';
    if (!fs.existsSync(filename)) {
      console.error(`❌ File ${filename} not found. Please run export script first.`);
      process.exit(1);
    }

    const rawData = fs.readFileSync(filename, 'utf-8');
    const data = JSON.parse(rawData);

    console.log('Data file loaded successfully\n');

    // Clear existing data (in reverse order of dependencies)
    console.log('🗑️  Clearing existing data...');
    await db.execute(sql`SET FOREIGN_KEY_CHECKS = 0`);
    
    await db.delete(schema.verification);
    await db.delete(schema.account);
    await db.delete(schema.session);
    await db.delete(schema.user);
    await db.delete(schema.scheduledIn);
    await db.delete(schema.enrolledIn);
    await db.delete(schema.classroom);
    await db.delete(schema.subject);
    await db.delete(schema.course);
    await db.delete(schema.student);
    await db.delete(schema.faculty);
    await db.delete(schema.department);
    await db.delete(schema.university);
    
    await db.execute(sql`SET FOREIGN_KEY_CHECKS = 1`);
    console.log('✅ Existing data cleared\n');

    // Import in correct order (respecting foreign keys)

    // 1. Universities (no dependencies)
    if (data.universities?.length > 0) {
      console.log(`Importing ${data.universities.length} universities...`);
      for (const uni of data.universities) {
        await db.insert(schema.university).values(uni);
      }
      console.log('✅ Universities imported');
    }

    // 2. Departments (depends on university)
    if (data.departments?.length > 0) {
      console.log(`Importing ${data.departments.length} departments...`);
      for (const dept of data.departments) {
        await db.insert(schema.department).values(dept);
      }
      console.log('✅ Departments imported');
    }

    // 3. Faculty (depends on department)
    if (data.faculty?.length > 0) {
      console.log(`Importing ${data.faculty.length} faculty members...`);
      for (const fac of data.faculty) {
        await db.insert(schema.faculty).values(fac);
      }
      console.log('✅ Faculty imported');
    }

    // 4. Students (depends on department)
    if (data.students?.length > 0) {
      console.log(`Importing ${data.students.length} students...`);
      for (const student of data.students) {
        await db.insert(schema.student).values(student);
      }
      console.log('✅ Students imported');
    }

    // 5. Courses (depends on department)
    if (data.courses?.length > 0) {
      console.log(`Importing ${data.courses.length} courses...`);
      for (const course of data.courses) {
        await db.insert(schema.course).values(course);
      }
      console.log('✅ Courses imported');
    }

    // 6. Subjects (depends on course and faculty)
    if (data.subjects?.length > 0) {
      console.log(`Importing ${data.subjects.length} subjects...`);
      for (const subject of data.subjects) {
        await db.insert(schema.subject).values(subject);
      }
      console.log('✅ Subjects imported');
    }

    // 7. Classrooms (no dependencies)
    if (data.classrooms?.length > 0) {
      console.log(`Importing ${data.classrooms.length} classrooms...`);
      for (const classroom of data.classrooms) {
        await db.insert(schema.classroom).values(classroom);
      }
      console.log('✅ Classrooms imported');
    }

    // 8. Enrollments (depends on student and course)
    if (data.enrollments?.length > 0) {
      console.log(`Importing ${data.enrollments.length} enrollments...`);
      for (const enrollment of data.enrollments) {
        await db.insert(schema.enrolledIn).values(enrollment);
      }
      console.log('✅ Enrollments imported');
    }

    // 9. Schedules (depends on subject and classroom)
    if (data.schedules?.length > 0) {
      console.log(`Importing ${data.schedules.length} schedules...`);
      for (const schedule of data.schedules) {
        await db.insert(schema.scheduledIn).values(schedule);
      }
      console.log('✅ Schedules imported');
    }

    // 10. Users
    if (data.users?.length > 0) {
      console.log(`Importing ${data.users.length} users...`);
      for (const user of data.users) {
        await db.insert(schema.user).values(user);
      }
      console.log('✅ Users imported');
    }

    // 11. Sessions (depends on user)
    if (data.sessions?.length > 0) {
      console.log(`Importing ${data.sessions.length} sessions...`);
      for (const session of data.sessions) {
        await db.insert(schema.session).values(session);
      }
      console.log('✅ Sessions imported');
    }

    // 12. Accounts (depends on user)
    if (data.accounts?.length > 0) {
      console.log(`Importing ${data.accounts.length} accounts...`);
      for (const account of data.accounts) {
        await db.insert(schema.account).values(account);
      }
      console.log('✅ Accounts imported');
    }

    // 13. Verifications
    if (data.verifications?.length > 0) {
      console.log(`Importing ${data.verifications.length} verifications...`);
      for (const verification of data.verifications) {
        await db.insert(schema.verification).values(verification);
      }
      console.log('✅ Verifications imported');
    }

    console.log('\n✅ All data imported successfully to MySQL!');
    console.log('\nYou can now:');
    console.log('1. Update backend/db/index.ts to use index-mysql.ts');
    console.log('2. Update backend/db/schema.ts to use schema-mysql.ts');
    console.log('3. Restart your backend server');

    process.exit(0);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importData();
