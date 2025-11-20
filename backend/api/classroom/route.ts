import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { classroom } from '@/db/schema';
import { eq, like, or } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single classroom fetch by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { 
            error: 'Valid ID is required',
            code: 'INVALID_ID' 
          },
          { status: 400 }
        );
      }

      const result = await db.select()
        .from(classroom)
        .where(eq(classroom.classroomId, parseInt(id)))
        .limit(1);

      if (result.length === 0) {
        return NextResponse.json(
          { error: 'Classroom not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(result[0], { status: 200 });
    }

    // List classrooms with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');

    let query = db.select().from(classroom);

    if (search) {
      query = query.where(
        or(
          like(classroom.roomNumber, `%${search}%`),
          like(classroom.building, `%${search}%`)
        )
      );
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
    if (!roomNumber) {
      return NextResponse.json(
        { 
          error: 'Room number is required',
          code: 'MISSING_ROOM_NUMBER' 
        },
        { status: 400 }
      );
    }

    if (!building) {
      return NextResponse.json(
        { 
          error: 'Building is required',
          code: 'MISSING_BUILDING' 
        },
        { status: 400 }
      );
    }

    if (capacity === undefined || capacity === null) {
      return NextResponse.json(
        { 
          error: 'Capacity is required',
          code: 'MISSING_CAPACITY' 
        },
        { status: 400 }
      );
    }

    if (typeof capacity !== 'number' || capacity < 0) {
      return NextResponse.json(
        { 
          error: 'Capacity must be a positive number',
          code: 'INVALID_CAPACITY' 
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      roomNumber: roomNumber.trim(),
      building: building.trim(),
      capacity: capacity
    };

    // Insert new classroom
    const newClassroom = await db.insert(classroom)
      .values(sanitizedData)
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

    // Validate ID parameter
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { 
          error: 'Valid ID is required',
          code: 'INVALID_ID' 
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
    const { roomNumber, building, capacity } = body;

    // Validate capacity if provided
    if (capacity !== undefined && capacity !== null) {
      if (typeof capacity !== 'number' || capacity < 0) {
        return NextResponse.json(
          { 
            error: 'Capacity must be a positive number',
            code: 'INVALID_CAPACITY' 
          },
          { status: 400 }
        );
      }
    }

    // Build update object with only provided fields
    const updates: any = {};
    
    if (roomNumber !== undefined) {
      updates.roomNumber = roomNumber.trim();
    }
    
    if (building !== undefined) {
      updates.building = building.trim();
    }
    
    if (capacity !== undefined) {
      updates.capacity = capacity;
    }

    // Update classroom
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

    // Validate ID parameter
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { 
          error: 'Valid ID is required',
          code: 'INVALID_ID' 
        },
        { status: 400 }
      );
    }

    const classroomId = parseInt(id);

    // Check if classroom exists
    const existingClassroom = await db.select()
      .from(classroom)
      .where(eq(classroom.classroomId, classroomId))
      .limit(1);

    if (existingClassroom.length === 0) {
      return NextResponse.json(
        { error: 'Classroom not found' },
        { status: 404 }
      );
    }

    // Check for dependent records
    const { scheduledIn: scheduledInTable } = await import('@/db/schema');
    
    // Check for schedules
    const scheduleCount = await db
      .select()
      .from(scheduledInTable)
      .where(eq(scheduledInTable.classroomId, classroomId));
    
    if (scheduleCount.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete classroom because it has associated schedules. Please remove schedules first.' },
        { status: 400 }
      );
    }

    // Delete classroom
    const deletedClassroom = await db.delete(classroom)
      .where(eq(classroom.classroomId, classroomId))
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