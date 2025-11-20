import { db } from '../index';
import { faculty } from '../schema';

async function main() {
    const sampleFaculty = [
        {
            name: 'Dr. Rajesh Kumar',
            designation: 'Professor',
            email: 'rajesh.kumar@university.edu',
            phone: '9876543210',
            departmentId: 1,
        },
        {
            name: 'Dr. Priya Sharma',
            designation: 'Associate Professor',
            email: 'priya.sharma@university.edu',
            phone: '9876543211',
            departmentId: 2,
        },
        {
            name: 'Dr. Amit Patel',
            designation: 'Assistant Professor',
            email: 'amit.patel@university.edu',
            phone: '9876543212',
            departmentId: 3,
        },
        {
            name: 'Dr. Kavita Desai',
            designation: 'Professor',
            email: 'kavita.desai@university.edu',
            phone: '9876543213',
            departmentId: 4,
        },
        {
            name: 'Dr. Suresh Iyer',
            designation: 'Associate Professor',
            email: 'suresh.iyer@university.edu',
            phone: '9876543214',
            departmentId: 1,
        },
        {
            name: 'Dr. Anjali Mehta',
            designation: 'Assistant Professor',
            email: 'anjali.mehta@university.edu',
            phone: '9876543215',
            departmentId: 2,
        },
    ];

    await db.insert(faculty).values(sampleFaculty);
    
    console.log('✅ Faculty seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});