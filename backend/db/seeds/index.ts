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

async function seed() {
  try {
    console.log('🌱 Starting database seeding...\n');

    // 1. Universities (must come first)
    console.log('📚 Seeding universities...');
    const universities = [
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
    await db.insert(university).values(universities);
    console.log('✅ Universities seeded\n');

    // 2. Departments
    console.log('🏢 Seeding departments...');
    const departments = [
      {
        name: 'Computer Science',
        building: 'Building A',
        universityId: 1,
      },
      {
        name: 'Electrical Engineering',
        building: 'Building B',
        universityId: 1,
      },
      {
        name: 'Mechanical Engineering',
        building: 'Building C',
        universityId: 2,
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
    const courses = [
      {
        courseName: 'Data Structures',
        credits: 4,
        semester: 3,
        departmentId: 1,
      },
      {
        courseName: 'Algorithms',
        credits: 4,
        semester: 4,
        departmentId: 1,
      },
      {
        courseName: 'Database Systems',
        credits: 3,
        semester: 5,
        departmentId: 1,
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
        departmentId: 1,
      },
      {
        name: 'Prof. Bob Davis',
        email: 'bob.davis@university.edu',
        designation: 'Associate Professor',
        phone: '+1-234-567-8902',
        departmentId: 1,
      }
    ];
    await db.insert(faculty).values(facultyMembers);
    console.log('✅ Faculty seeded\n');

    // 6. Subjects
    console.log('📝 Seeding subjects...');
    const subjects = [
      {
        name: 'Introduction to Programming',
        credits: 3,
        courseId: 1,
        facultyId: 1,
      },
      {
        name: 'Digital Logic Design',
        credits: 4,
        courseId: 2,
        facultyId: 2,
      }
    ];
    await db.insert(subject).values(subjects);
    console.log('✅ Subjects seeded\n');

    // 7. Students
    console.log('👨‍� Seeding students...');
    const students = [
      {
        name: 'John Doe',
        email: 'john.doe@student.edu',
        dateOfBirth: '2003-05-15',
        gender: 'Male',
        address: '123 Main St, Bangalore',
        phone: '+1-234-567-8903',
        departmentId: 1,
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@student.edu',
        dateOfBirth: '2003-08-22',
        gender: 'Female',
        address: '456 Oak Ave, Bangalore',
        phone: '+1-234-567-8904',
        departmentId: 1,
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
