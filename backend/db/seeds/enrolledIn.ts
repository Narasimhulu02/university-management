import { db } from '../index';
import { enrolledIn } from '../schema';

async function main() {
    const sampleEnrollments = [
        {
            studentId: 1,
            courseId: 11,
            grade: 'A+',
        },
        {
            studentId: 1,
            courseId: 12,
            grade: 'A',
        },
        {
            studentId: 2,
            courseId: 11,
            grade: 'B+',
        },
        {
            studentId: 2,
            courseId: 13,
            grade: 'A',
        },
        {
            studentId: 3,
            courseId: 14,
            grade: 'A+',
        },
        {
            studentId: 3,
            courseId: 15,
            grade: 'B',
        },
        {
            studentId: 4,
            courseId: 1,
            grade: 'A',
        },
        {
            studentId: 4,
            courseId: 16,
            grade: 'B+',
        },
        {
            studentId: 5,
            courseId: 2,
            grade: 'A+',
        },
        {
            studentId: 6,
            courseId: 17,
            grade: 'A',
        },
    ];

    await db.insert(enrolledIn).values(sampleEnrollments);
    
    console.log('✅ EnrolledIn seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});