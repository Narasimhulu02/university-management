import { db } from '../index';
import { department } from '../schema';

async function main() {
    const sampleDepartments = [
        {
            name: 'Computer Science',
            building: 'Building A',
            hodId: null,
            universityId: 1,
        },
        {
            name: 'Electronics',
            building: 'Building B',
            hodId: null,
            universityId: 1,
        },
        {
            name: 'Mechanical',
            building: 'Building C',
            hodId: null,
            universityId: 2,
        },
        {
            name: 'Information Science',
            building: 'Building D',
            hodId: null,
            universityId: 2,
        },
    ];

    await db.insert(department).values(sampleDepartments);
    
    console.log('✅ Department seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});