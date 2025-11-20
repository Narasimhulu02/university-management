import { db } from '../index';
import { university } from '../schema';

async function main() {
    const sampleUniversities = [
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

    await db.insert(university).values(sampleUniversities);
    
    console.log('✅ University seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});