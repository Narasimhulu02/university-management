import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { scheduledIn } from '@/db/schema';
import { eq, like, or } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single record fetch by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const schedule = await db
        .select()
        .from(scheduledIn)
        .where(eq(scheduledIn.id, parseInt(id)))
        .limit(1);

      if (schedule.length === 0) {
        return NextResponse.json(
          { error: 'Schedule not found', code: 'NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(schedule[0], { status: 200 });
    }

    // List with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');

    let query = db.select().from(scheduledIn);

    if (search) {
      query = query.where(
        or(
          like(scheduledIn.day, `%${search}%`),
          like(scheduledIn.timeSlot, `%${search}%`)
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
    const { subjectId, classroomId, day, timeSlot } = body;

    // Validate required fields
    if (!subjectId) {
      return NextResponse.json(
        { error: 'Subject ID is required', code: 'MISSING_SUBJECT_ID' },
        { status: 400 }
      );
    }

    if (!classroomId) {
      return NextResponse.json(
        { error: 'Classroom ID is required', code: 'MISSING_CLASSROOM_ID' },
        { status: 400 }
      );
    }

    if (!day) {
      return NextResponse.json(
        { error: 'Day is required', code: 'MISSING_DAY' },
        { status: 400 }
      );
    }

    if (!timeSlot) {
      return NextResponse.json(
        { error: 'Time slot is required', code: 'MISSING_TIME_SLOT' },
        { status: 400 }
      );
    }

    // Validate data types
    if (isNaN(parseInt(subjectId))) {
      return NextResponse.json(
        { error: 'Subject ID must be a valid integer', code: 'INVALID_SUBJECT_ID' },
        { status: 400 }
      );
    }

    if (isNaN(parseInt(classroomId))) {
      return NextResponse.json(
        { error: 'Classroom ID must be a valid integer', code: 'INVALID_CLASSROOM_ID' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedDay = day.trim();
    const sanitizedTimeSlot = timeSlot.trim();

    // Insert new schedule
    const newSchedule = await db
      .insert(scheduledIn)
      .values({
        subjectId: parseInt(subjectId),
        classroomId: parseInt(classroomId),
        day: sanitizedDay,
        timeSlot: sanitizedTimeSlot,
      })
      .returning();

    return NextResponse.json(newSchedule[0], { status: 201 });
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
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const body = await request.json();

    // Check if record exists
    const existingSchedule = await db
      .select()
      .from(scheduledIn)
      .where(eq(scheduledIn.id, parseInt(id)))
      .limit(1);

    if (existingSchedule.length === 0) {
      return NextResponse.json(
        { error: 'Schedule not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    // Build update object with only provided fields
    const updates: any = {};

    if (body.subjectId !== undefined) {
      if (isNaN(parseInt(body.subjectId))) {
        return NextResponse.json(
          { error: 'Subject ID must be a valid integer', code: 'INVALID_SUBJECT_ID' },
          { status: 400 }
        );
      }
      updates.subjectId = parseInt(body.subjectId);
    }

    if (body.classroomId !== undefined) {
      if (isNaN(parseInt(body.classroomId))) {
        return NextResponse.json(
          { error: 'Classroom ID must be a valid integer', code: 'INVALID_CLASSROOM_ID' },
          { status: 400 }
        );
      }
      updates.classroomId = parseInt(body.classroomId);
    }

    if (body.day !== undefined) {
      updates.day = body.day.trim();
    }

    if (body.timeSlot !== undefined) {
      updates.timeSlot = body.timeSlot.trim();
    }

    // If no fields to update, return the existing record
    if (Object.keys(updates).length === 0) {
      return NextResponse.json(existingSchedule[0], { status: 200 });
    }

    // Update the schedule
    const updatedSchedule = await db
      .update(scheduledIn)
      .set(updates)
      .where(eq(scheduledIn.id, parseInt(id)))
      .returning();

    return NextResponse.json(updatedSchedule[0], { status: 200 });
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
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if record exists before deleting
    const existingSchedule = await db
      .select()
      .from(scheduledIn)
      .where(eq(scheduledIn.id, parseInt(id)))
      .limit(1);

    if (existingSchedule.length === 0) {
      return NextResponse.json(
        { error: 'Schedule not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    // Delete the schedule
    const deleted = await db
      .delete(scheduledIn)
      .where(eq(scheduledIn.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Schedule deleted successfully',
        deleted: deleted[0],
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