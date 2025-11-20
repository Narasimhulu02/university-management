import { db } from '../index';
import { course } from '../schema';

async function main() {
    const sampleCourses = [
        {
            courseName: 'Data Structures and Algorithms',
            credits: 4,
            semester: 3,
            departmentId: 1,
        },
        {
            courseName: 'Database Management Systems',
            credits: 4,
            semester: 5,
            departmentId: 1,
        },
        {
            courseName: 'Digital Electronics',
            credits: 3,
            semester: 4,
            departmentId: 2,
        },
        {
            courseName: 'Microprocessors and Microcontrollers',
            credits: 4,
            semester: 6,
            departmentId: 2,
        },
        {
            courseName: 'Thermodynamics',
            credits: 4,
            semester: 3,
            departmentId: 3,
        },
        {
            courseName: 'Web Technologies',
            credits: 3,
            semester: 5,
            departmentId: 4,
        },
        {
            courseName: 'Software Engineering',
            credits: 4,
            semester: 7,
            departmentId: 4,
        },
    ];

    await db.insert(course).values(sampleCourses);
    
    console.log('✅ Course seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});