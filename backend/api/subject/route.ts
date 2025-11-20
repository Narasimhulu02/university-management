import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { subject } from '@/db/schema';
import { eq, like } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const subjectRecord = await db
        .select()
        .from(subject)
        .where(eq(subject.subjectId, parseInt(id)))
        .limit(1);

      if (subjectRecord.length === 0) {
        return NextResponse.json(
          { error: 'Subject not found', code: 'NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(subjectRecord[0], { status: 200 });
    }

    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');

    let query = db.select().from(subject);

    if (search) {
      query = query.where(like(subject.name, `%${search}%`));
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
    const { name, credits, courseId, facultyId } = body;

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required', code: 'MISSING_NAME' },
        { status: 400 }
      );
    }

    if (!credits && credits !== 0) {
      return NextResponse.json(
        { error: 'Credits is required', code: 'MISSING_CREDITS' },
        { status: 400 }
      );
    }

    if (!courseId) {
      return NextResponse.json(
        { error: 'Course ID is required', code: 'MISSING_COURSE_ID' },
        { status: 400 }
      );
    }

    if (!facultyId) {
      return NextResponse.json(
        { error: 'Faculty ID is required', code: 'MISSING_FACULTY_ID' },
        { status: 400 }
      );
    }

    if (typeof credits !== 'number' || isNaN(credits)) {
      return NextResponse.json(
        { error: 'Credits must be a valid number', code: 'INVALID_CREDITS' },
        { status: 400 }
      );
    }

    if (typeof courseId !== 'number' || isNaN(courseId)) {
      return NextResponse.json(
        { error: 'Course ID must be a valid number', code: 'INVALID_COURSE_ID' },
        { status: 400 }
      );
    }

    if (typeof facultyId !== 'number' || isNaN(facultyId)) {
      return NextResponse.json(
        { error: 'Faculty ID must be a valid number', code: 'INVALID_FACULTY_ID' },
        { status: 400 }
      );
    }

    const newSubject = await db
      .insert(subject)
      .values({
        name: name.trim(),
        credits: parseInt(credits.toString()),
        courseId: parseInt(courseId.toString()),
        facultyId: parseInt(facultyId.toString()),
      })
      .returning();

    return NextResponse.json(newSubject[0], { status: 201 });
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

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const subjectRecord = await db
      .select()
      .from(subject)
      .where(eq(subject.subjectId, parseInt(id)))
      .limit(1);

    if (subjectRecord.length === 0) {
      return NextResponse.json(
        { error: 'Subject not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { name, credits, courseId, facultyId } = body;

    const updates: any = {};

    if (name !== undefined) {
      updates.name = name.trim();
    }

    if (credits !== undefined) {
      if (typeof credits !== 'number' || isNaN(credits)) {
        return NextResponse.json(
          { error: 'Credits must be a valid number', code: 'INVALID_CREDITS' },
          { status: 400 }
        );
      }
      updates.credits = parseInt(credits.toString());
    }

    if (courseId !== undefined) {
      if (typeof courseId !== 'number' || isNaN(courseId)) {
        return NextResponse.json(
          { error: 'Course ID must be a valid number', code: 'INVALID_COURSE_ID' },
          { status: 400 }
        );
      }
      updates.courseId = parseInt(courseId.toString());
    }

    if (facultyId !== undefined) {
      if (typeof facultyId !== 'number' || isNaN(facultyId)) {
        return NextResponse.json(
          { error: 'Faculty ID must be a valid number', code: 'INVALID_FACULTY_ID' },
          { status: 400 }
        );
      }
      updates.facultyId = parseInt(facultyId.toString());
    }

    const updated = await db
      .update(subject)
      .set(updates)
      .where(eq(subject.subjectId, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0], { status: 200 });
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

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const subjectId = parseInt(id);

    const subjectRecord = await db
      .select()
      .from(subject)
      .where(eq(subject.subjectId, subjectId))
      .limit(1);

    if (subjectRecord.length === 0) {
      return NextResponse.json(
        { error: 'Subject not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    // Check for dependent records
    const { scheduledIn: scheduledInTable } = await import('@/db/schema');
    
    // Check for schedules
    const scheduleCount = await db
      .select()
      .from(scheduledInTable)
      .where(eq(scheduledInTable.subjectId, subjectId));
    
    if (scheduleCount.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete subject because it has associated schedules. Please remove schedules first.' },
        { status: 400 }
      );
    }

    const deleted = await db
      .delete(subject)
      .where(eq(subject.subjectId, subjectId))
      .returning();

    return NextResponse.json(
      {
        message: 'Subject deleted successfully',
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