import { db } from '../index';
import { scheduledIn } from '../schema';

async function main() {
    const sampleSchedules = [
        {
            subjectId: 1,
            classroomId: 11,
            day: 'Monday',
            timeSlot: '9:00-10:00 AM',
        },
        {
            subjectId: 2,
            classroomId: 12,
            day: 'Monday',
            timeSlot: '10:00-11:00 AM',
        },
        {
            subjectId: 3,
            classroomId: 13,
            day: 'Monday',
            timeSlot: '2:00-3:00 PM',
        },
        {
            subjectId: 4,
            classroomId: 14,
            day: 'Tuesday',
            timeSlot: '9:00-10:00 AM',
        },
        {
            subjectId: 5,
            classroomId: 15,
            day: 'Tuesday',
            timeSlot: '11:00-12:00 PM',
        },
        {
            subjectId: 6,
            classroomId: 16,
            day: 'Tuesday',
            timeSlot: '3:00-4:00 PM',
        },
        {
            subjectId: 7,
            classroomId: 17,
            day: 'Wednesday',
            timeSlot: '9:00-10:00 AM',
        },
        {
            subjectId: 8,
            classroomId: 11,
            day: 'Wednesday',
            timeSlot: '10:00-11:00 AM',
        },
        {
            subjectId: 9,
            classroomId: 12,
            day: 'Wednesday',
            timeSlot: '2:00-3:00 PM',
        },
        {
            subjectId: 10,
            classroomId: 13,
            day: 'Thursday',
            timeSlot: '9:00-10:00 AM',
        },
        {
            subjectId: 11,
            classroomId: 14,
            day: 'Thursday',
            timeSlot: '11:00-12:00 PM',
        },
        {
            subjectId: 12,
            classroomId: 15,
            day: 'Thursday',
            timeSlot: '3:00-4:00 PM',
        },
        {
            subjectId: 13,
            classroomId: 16,
            day: 'Friday',
            timeSlot: '9:00-10:00 AM',
        },
        {
            subjectId: 14,
            classroomId: 17,
            day: 'Friday',
            timeSlot: '10:00-11:00 AM',
        },
    ];

    await db.insert(scheduledIn).values(sampleSchedules);
    
    console.log('✅ Scheduled In seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});