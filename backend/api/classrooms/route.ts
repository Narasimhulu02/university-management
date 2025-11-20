import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { classroom, scheduledIn, subject, course, department } from '@/db/schema';
import { eq, like, and, or, desc, inArray } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const universityId = searchParams.get('universityId');

    // Single classroom by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { 
            error: "Valid ID is required",
            code: "INVALID_ID" 
          },
          { status: 400 }
        );
      }

      const classroomRecord = await db.select()
        .from(classroom)
        .where(eq(classroom.classroomId, parseInt(id)))
        .limit(1);

      if (classroomRecord.length === 0) {
        return NextResponse.json(
          { error: 'Classroom not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(classroomRecord[0], { status: 200 });
    }

    // List with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort') ?? 'classroomId';
    const order = searchParams.get('order') ?? 'desc';

    let query = db.select().from(classroom);

    // Filter by university via schedules
    if (universityId && !isNaN(parseInt(universityId))) {
      const univId = parseInt(universityId);
      
      // Get all departments for this university
      const depts = await db.select({ departmentId: department.departmentId })
        .from(department)
        .where(eq(department.universityId, univId));
      
      const deptIds = depts.map(d => d.departmentId);
      
      if (deptIds.length > 0) {
        // Get courses for these departments
        const courses = await db.select({ courseId: course.courseId })
          .from(course)
          .where(inArray(course.departmentId, deptIds));
        
        const courseIds = courses.map(c => c.courseId);
        
        if (courseIds.length > 0) {
          // Get subjects for these courses
          const subjects = await db.select({ subjectId: subject.subjectId })
            .from(subject)
            .where(inArray(subject.courseId, courseIds));
          
          const subjectIds = subjects.map(s => s.subjectId);
          
          if (subjectIds.length > 0) {
            // Get classrooms used by these subjects
            const schedules = await db.select({ classroomId: scheduledIn.classroomId })
              .from(scheduledIn)
              .where(inArray(scheduledIn.subjectId, subjectIds));
            
            const classroomIds = [...new Set(schedules.map(s => s.classroomId))];
            
            if (classroomIds.length > 0) {
              query = query.where(inArray(classroom.classroomId, classroomIds));
            } else {
              // No classrooms for this university
              return NextResponse.json([], { status: 200 });
            }
          } else {
            return NextResponse.json([], { status: 200 });
          }
        } else {
          return NextResponse.json([], { status: 200 });
        }
      } else {
        return NextResponse.json([], { status: 200 });
      }
    }

    if (search) {
      query = query.where(
        or(
          like(classroom.roomNumber, `%${search}%`),
          like(classroom.building, `%${search}%`)
        )
      );
    }

    // Apply sorting
    if (order === 'asc') {
      query = query.orderBy(classroom[sort as keyof typeof classroom] || classroom.classroomId);
    } else {
      query = query.orderBy(desc(classroom[sort as keyof typeof classroom] || classroom.classroomId));
    }

    const results = await query.limit(limit).offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { roomNumber, building, capacity } = body;

    // Validate required fields
    if (!roomNumber || typeof roomNumber !== 'string' || roomNumber.trim() === '') {
      return NextResponse.json(
        { 
          error: "Room number is required and must be a non-empty string",
          code: "MISSING_ROOM_NUMBER" 
        },
        { status: 400 }
      );
    }

    if (!building || typeof building !== 'string' || building.trim() === '') {
      return NextResponse.json(
        { 
          error: "Building is required and must be a non-empty string",
          code: "MISSING_BUILDING" 
        },
        { status: 400 }
      );
    }

    if (!capacity || typeof capacity !== 'number') {
      return NextResponse.json(
        { 
          error: "Capacity is required and must be a number",
          code: "MISSING_CAPACITY" 
        },
        { status: 400 }
      );
    }

    // Validate capacity is positive integer
    if (!Number.isInteger(capacity) || capacity <= 0) {
      return NextResponse.json(
        { 
          error: "Capacity must be a positive integer",
          code: "INVALID_CAPACITY" 
        },
        { status: 400 }
      );
    }

    // Insert new classroom
    const newClassroom = await db.insert(classroom)
      .values({
        roomNumber: roomNumber.trim(),
        building: building.trim(),
        capacity: capacity
      })
      .returning();

    return NextResponse.json(newClassroom[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Validate ID
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        },
        { status: 400 }
      );
    }

    // Check if classroom exists
    const existingClassroom = await db.select()
      .from(classroom)
      .where(eq(classroom.classroomId, parseInt(id)))
      .limit(1);

    if (existingClassroom.length === 0) {
      return NextResponse.json(
        { error: 'Classroom not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const updates: Record<string, any> = {};

    // Validate and prepare updates
    if (body.roomNumber !== undefined) {
      if (typeof body.roomNumber !== 'string' || body.roomNumber.trim() === '') {
        return NextResponse.json(
          { 
            error: "Room number must be a non-empty string",
            code: "INVALID_ROOM_NUMBER" 
          },
          { status: 400 }
        );
      }
      updates.roomNumber = body.roomNumber.trim();
    }

    if (body.building !== undefined) {
      if (typeof body.building !== 'string' || body.building.trim() === '') {
        return NextResponse.json(
          { 
            error: "Building must be a non-empty string",
            code: "INVALID_BUILDING" 
          },
          { status: 400 }
        );
      }
      updates.building = body.building.trim();
    }

    if (body.capacity !== undefined) {
      if (typeof body.capacity !== 'number') {
        return NextResponse.json(
          { 
            error: "Capacity must be a number",
            code: "INVALID_CAPACITY" 
          },
          { status: 400 }
        );
      }

      if (!Number.isInteger(body.capacity) || body.capacity <= 0) {
        return NextResponse.json(
          { 
            error: "Capacity must be a positive integer",
            code: "INVALID_CAPACITY" 
          },
          { status: 400 }
        );
      }
      updates.capacity = body.capacity;
    }

    // Perform update
    const updatedClassroom = await db.update(classroom)
      .set(updates)
      .where(eq(classroom.classroomId, parseInt(id)))
      .returning();

    return NextResponse.json(updatedClassroom[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Validate ID
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        },
        { status: 400 }
      );
    }

    // Check if classroom exists
    const existingClassroom = await db.select()
      .from(classroom)
      .where(eq(classroom.classroomId, parseInt(id)))
      .limit(1);

    if (existingClassroom.length === 0) {
      return NextResponse.json(
        { error: 'Classroom not found' },
        { status: 404 }
      );
    }

    // Delete classroom
    const deletedClassroom = await db.delete(classroom)
      .where(eq(classroom.classroomId, parseInt(id)))
      .returning();

    return NextResponse.json(
      { 
        message: 'Classroom deleted successfully',
        classroom: deletedClassroom[0]
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}