import { db } from '../index';
import { 
  university, 
  department, 
  classroom, 
  course, 
  subject, 
  faculty, 
  student,
  enrolledIn,
  scheduledIn 
} from '../schema';
import { sql } from 'drizzle-orm';

async function seed() {
  try {
    console.log('🌱 Starting database seeding...\n');

    // Clear existing data (in reverse order of dependencies)
    console.log('🧹 Clearing existing data...');
    await db.delete(scheduledIn);
    await db.delete(enrolledIn);
    await db.delete(student);
    await db.delete(subject);
    await db.delete(faculty);
    await db.delete(course);
    await db.delete(classroom);
    await db.delete(department);
    await db.delete(university);
    console.log('✅ Database cleared\n');

    // 1. Universities (must come first)
    console.log('📚 Seeding universities...');
    const universitiesData = [
      {
        name: 'PES University',
        location: 'Bangalore',
        establishedYear: 1972,
      },
      {
        name: 'IISc Bangalore',
        location: 'Bangalore',
        establishedYear: 1909,
      },
      {
        name: 'NIT Karnataka',
        location: 'Surathkal',
        establishedYear: 1960,
      }
    ];
    await db.insert(university).values(universitiesData);
    
    // Get the inserted universities to use their IDs
    const universities = await db.select().from(university);
    console.log('✅ Universities seeded\n');

    // 2. Departments
    console.log('🏢 Seeding departments...');
    const departments = [
      {
        name: 'Computer Science',
        building: 'Building A',
        universityId: universities[0].universityId,
      },
      {
        name: 'Electrical Engineering',
        building: 'Building B',
        universityId: universities[0].universityId,
      },
      {
        name: 'Mechanical Engineering',
        building: 'Building C',
        universityId: universities[1].universityId,
      }
    ];
    await db.insert(department).values(departments);
    console.log('✅ Departments seeded\n');

    // 3. Classrooms
    console.log('🏫 Seeding classrooms...');
    const classrooms = [
      { roomNumber: '101', building: 'Building A', capacity: 40 },
      { roomNumber: '102', building: 'Building A', capacity: 35 },
      { roomNumber: '201', building: 'Building B', capacity: 50 },
      { roomNumber: '202', building: 'Building B', capacity: 45 },
      { roomNumber: '301', building: 'Building C', capacity: 35 },
    ];
    await db.insert(classroom).values(classrooms);
    console.log('✅ Classrooms seeded\n');

    // 4. Courses
    console.log('📖 Seeding courses...');
    // Get departments to use their IDs
    const depts = await db.select().from(department);
    
    const courses = [
      {
        courseName: 'Data Structures',
        credits: 4,
        semester: 3,
        departmentId: depts[0].departmentId,
      },
      {
        courseName: 'Algorithms',
        credits: 4,
        semester: 4,
        departmentId: depts[0].departmentId,
      },
      {
        courseName: 'Database Systems',
        credits: 3,
        semester: 5,
        departmentId: depts[0].departmentId,
      }
    ];
    await db.insert(course).values(courses);
    console.log('✅ Courses seeded\n');

    // 5. Faculty (must come before subjects)
    console.log('👨‍🏫 Seeding faculty...');
    const facultyMembers = [
      {
        name: 'Prof. Alice Brown',
        email: 'alice.brown@university.edu',
        designation: 'Professor',
        phone: '+1-234-567-8901',
        departmentId: depts[0].departmentId,
      },
      {
        name: 'Prof. Bob Davis',
        email: 'bob.davis@university.edu',
        designation: 'Associate Professor',
        phone: '+1-234-567-8902',
        departmentId: depts[0].departmentId,
      }
    ];
    await db.insert(faculty).values(facultyMembers);
    console.log('✅ Faculty seeded\n');

    // 6. Subjects
    console.log('📝 Seeding subjects...');
    // Get courses and faculty to use their IDs
    const coursesData = await db.select().from(course);
    const facultyData = await db.select().from(faculty);
    
    const subjects = [
      {
        name: 'Introduction to Programming',
        credits: 3,
        courseId: coursesData[0].courseId,
        facultyId: facultyData[0].facultyId,
      },
      {
        name: 'Digital Logic Design',
        credits: 4,
        courseId: coursesData[1].courseId,
        facultyId: facultyData[1].facultyId,
      }
    ];
    await db.insert(subject).values(subjects);
    console.log('✅ Subjects seeded\n');

    // 7. Students
    console.log('👨‍🎓 Seeding students...');
    const students = [
      {
        name: 'John Doe',
        email: 'john.doe@student.edu',
        dateOfBirth: '2003-05-15',
        gender: 'Male',
        address: '123 Main St, Bangalore',
        phone: '+1-234-567-8903',
        departmentId: depts[0].departmentId,
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@student.edu',
        dateOfBirth: '2003-08-22',
        gender: 'Female',
        address: '456 Oak Ave, Bangalore',
        phone: '+1-234-567-8904',
        departmentId: depts[0].departmentId,
      }
    ];
    await db.insert(student).values(students);
    console.log('✅ Students seeded\n');

    console.log('🎉 Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();
