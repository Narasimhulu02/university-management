import { db } from '../index';
import { classroom } from '../schema';

async function main() {
    const sampleClassrooms = [
        {
            roomNumber: '101',
            building: 'Building A',
            capacity: 40,
        },
        {
            roomNumber: '102',
            building: 'Building A',
            capacity: 35,
        },
        {
            roomNumber: '201',
            building: 'Building B',
            capacity: 50,
        },
        {
            roomNumber: '202',
            building: 'Building B',
            capacity: 45,
        },
        {
            roomNumber: '301',
            building: 'Building C',
            capacity: 35,
        },
        {
            roomNumber: '302',
            building: 'Building C',
            capacity: 60,
        },
        {
            roomNumber: '401',
            building: 'Building D',
            capacity: 30,
        },
    ];

    await db.insert(classroom).values(sampleClassrooms);
    
    console.log('✅ Classroom seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});