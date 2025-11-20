import { db } from '../index';
import { student } from '../schema';

async function main() {
    const sampleStudents = [
        {
            name: 'John Smith',
            email: 'jsmith@student.edu',
            dateOfBirth: '2002-05-15',
            gender: 'Male',
            address: '123 College Ave, Stanford, CA 94305',
            phone: '+1-650-555-7890',
            departmentId: 1,
        },
        {
            name: 'Maria Garcia',
            email: 'mgarcia@student.edu',
            dateOfBirth: '2003-08-22',
            gender: 'Female',
            address: '456 Campus Dr, Cambridge, MA 02139',
            phone: '+1-617-555-1234',
            departmentId: 2,
        },
        {
            name: 'David Lee',
            email: 'dlee@student.edu',
            dateOfBirth: '2001-12-10',
            gender: 'Male',
            address: '789 University Blvd, Berkeley, CA 94720',
            phone: '+1-510-555-2345',
            departmentId: 3,
        },
        {
            name: 'Sarah Williams',
            email: 'swilliams@student.edu',
            dateOfBirth: '2002-03-18',
            gender: 'Female',
            address: '321 Scholar Lane, Princeton, NJ 08544',
            phone: '+1-609-555-3456',
            departmentId: 4,
        },
        {
            name: 'Michael Chen',
            email: 'mchen@student.edu',
            dateOfBirth: '2003-11-05',
            gender: 'Male',
            address: '654 Academic Way, New Haven, CT 06520',
            phone: '+1-203-555-4567',
            departmentId: 5,
        },
        {
            name: 'Emily Rodriguez',
            email: 'erodriguez@student.edu',
            dateOfBirth: '2002-07-28',
            gender: 'Female',
            address: '987 Education St, Austin, TX 78712',
            phone: '+1-512-555-5678',
            departmentId: 6,
        },
        {
            name: 'James Taylor',
            email: 'jtaylor@student.edu',
            dateOfBirth: '2001-09-14',
            gender: 'Male',
            address: '147 Campus Circle, Ann Arbor, MI 48109',
            phone: '+1-734-555-6789',
            departmentId: 7,
        },
        {
            name: 'Aisha Patel',
            email: 'apatel@student.edu',
            dateOfBirth: '2003-02-20',
            gender: 'Female',
            address: '258 College Pkwy, Los Angeles, CA 90095',
            phone: '+1-310-555-7891',
            departmentId: 8,
        },
        {
            name: 'Robert Johnson',
            email: 'rjohnson@student.edu',
            dateOfBirth: '2002-10-30',
            gender: 'Male',
            address: '369 Student Rd, Seattle, WA 98195',
            phone: '+1-206-555-8912',
            departmentId: 1,
        },
        {
            name: 'Jessica Kim',
            email: 'jkim@student.edu',
            dateOfBirth: '2003-04-12',
            gender: 'Female',
            address: '741 Learning Ave, Evanston, IL 60208',
            phone: '+1-847-555-9123',
            departmentId: 2,
        },
        {
            name: 'Daniel Martinez',
            email: 'dmartinez@student.edu',
            dateOfBirth: '2001-06-25',
            gender: 'Male',
            address: '852 Knowledge Dr, Durham, NC 27708',
            phone: '+1-919-555-0234',
            departmentId: 3,
        },
        {
            name: 'Ashley Brown',
            email: 'abrown@student.edu',
            dateOfBirth: '2002-01-08',
            gender: 'Female',
            address: '963 Campus Terrace, Ithaca, NY 14850',
            phone: '+1-607-555-1345',
            departmentId: 4,
        },
        {
            name: 'Kevin Nguyen',
            email: 'knguyen@student.edu',
            dateOfBirth: '2003-09-17',
            gender: 'Male',
            address: '159 Scholar Way, Philadelphia, PA 19104',
            phone: '+1-215-555-2456',
            departmentId: 5,
        },
        {
            name: 'Sophia Anderson',
            email: 'sanderson@student.edu',
            dateOfBirth: '2002-12-03',
            gender: 'Female',
            address: '357 University St, Providence, RI 02912',
            phone: '+1-401-555-3567',
            departmentId: 6,
        },
        {
            name: 'Ryan O\'Connor',
            email: 'roconnor@student.edu',
            dateOfBirth: '2001-08-19',
            gender: 'Other',
            address: '468 Academic Blvd, Atlanta, GA 30332',
            phone: '+1-404-555-4678',
            departmentId: 7,
        },
    ];

    await db.insert(student).values(sampleStudents);
    
    console.log('✅ Student seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});