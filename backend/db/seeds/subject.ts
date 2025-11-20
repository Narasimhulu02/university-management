import { db } from '../index';
import { subject } from '../schema';

async function main() {
    const sampleSubjects = [
        {
            name: 'Data Structures Fundamentals',
            credits: 3,
            courseId: 1,
            facultyId: 1,
        },
        {
            name: 'Advanced Algorithms',
            credits: 4,
            courseId: 1,
            facultyId: 2,
        },
        {
            name: 'Database Design Principles',
            credits: 3,
            courseId: 2,
            facultyId: 3,
        },
        {
            name: 'SQL and Query Optimization',
            credits: 3,
            courseId: 2,
            facultyId: 4,
        },
        {
            name: 'Network Protocols and Architecture',
            credits: 4,
            courseId: 3,
            facultyId: 5,
        },
        {
            name: 'Cybersecurity Fundamentals',
            credits: 3,
            courseId: 3,
            facultyId: 6,
        },
        {
            name: 'Machine Learning Basics',
            credits: 4,
            courseId: 4,
            facultyId: 1,
        },
        {
            name: 'Deep Learning and Neural Networks',
            credits: 4,
            courseId: 4,
            facultyId: 2,
        },
        {
            name: 'Software Engineering Practices',
            credits: 3,
            courseId: 5,
            facultyId: 3,
        },
        {
            name: 'Agile Development Methodologies',
            credits: 2,
            courseId: 5,
            facultyId: 4,
        },
        {
            name: 'Web Development with React',
            credits: 3,
            courseId: 6,
            facultyId: 5,
        },
        {
            name: 'RESTful API Design',
            credits: 2,
            courseId: 6,
            facultyId: 6,
        },
        {
            name: 'Cloud Computing with AWS',
            credits: 4,
            courseId: 7,
            facultyId: 1,
        },
        {
            name: 'DevOps and CI/CD Pipelines',
            credits: 3,
            courseId: 7,
            facultyId: 2,
        },
    ];

    await db.insert(subject).values(sampleSubjects);
    
    console.log('✅ Subjects seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});