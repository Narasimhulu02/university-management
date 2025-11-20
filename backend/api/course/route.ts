import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { course, subject, enrolledIn } from '@/db/schema';
import { eq, like } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single course by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const result = await db
        .select()
        .from(course)
        .where(eq(course.courseId, parseInt(id)))
        .limit(1);

      if (result.length === 0) {
        return NextResponse.json(
          { error: 'Course not found', code: 'COURSE_NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(result[0], { status: 200 });
    }

    // List courses with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');

    let query = db.select().from(course);

    if (search) {
      query = query.where(like(course.courseName, `%${search}%`));
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
    const { courseName, credits, semester, departmentId } = body;

    // Validate required fields
    if (!courseName) {
      return NextResponse.json(
        { error: 'Course name is required', code: 'MISSING_COURSE_NAME' },
        { status: 400 }
      );
    }

    if (credits === undefined || credits === null) {
      return NextResponse.json(
        { error: 'Credits is required', code: 'MISSING_CREDITS' },
        { status: 400 }
      );
    }

    if (semester === undefined || semester === null) {
      return NextResponse.json(
        { error: 'Semester is required', code: 'MISSING_SEMESTER' },
        { status: 400 }
      );
    }

    if (!departmentId) {
      return NextResponse.json(
        { error: 'Department ID is required', code: 'MISSING_DEPARTMENT_ID' },
        { status: 400 }
      );
    }

    // Validate data types
    if (typeof courseName !== 'string' || courseName.trim() === '') {
      return NextResponse.json(
        { error: 'Course name must be a non-empty string', code: 'INVALID_COURSE_NAME' },
        { status: 400 }
      );
    }

    if (!Number.isInteger(credits) || credits < 0) {
      return NextResponse.json(
        { error: 'Credits must be a positive integer', code: 'INVALID_CREDITS' },
        { status: 400 }
      );
    }

    if (!Number.isInteger(semester) || semester < 1) {
      return NextResponse.json(
        { error: 'Semester must be a positive integer', code: 'INVALID_SEMESTER' },
        { status: 400 }
      );
    }

    if (!Number.isInteger(departmentId) || departmentId < 1) {
      return NextResponse.json(
        { error: 'Department ID must be a valid integer', code: 'INVALID_DEPARTMENT_ID' },
        { status: 400 }
      );
    }

    // Insert new course
    const newCourse = await db
      .insert(course)
      .values({
        courseName: courseName.trim(),
        credits,
        semester,
        departmentId,
      })
      .returning();

    return NextResponse.json(newCourse[0], { status: 201 });
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

    // Check if course exists
    const existing = await db
      .select()
      .from(course)
      .where(eq(course.courseId, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Course not found', code: 'COURSE_NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { courseName, credits, semester, departmentId } = body;

    // Build update object with only provided fields
    const updates: Record<string, any> = {};

    if (courseName !== undefined) {
      if (typeof courseName !== 'string' || courseName.trim() === '') {
        return NextResponse.json(
          { error: 'Course name must be a non-empty string', code: 'INVALID_COURSE_NAME' },
          { status: 400 }
        );
      }
      updates.courseName = courseName.trim();
    }

    if (credits !== undefined) {
      if (!Number.isInteger(credits) || credits < 0) {
        return NextResponse.json(
          { error: 'Credits must be a positive integer', code: 'INVALID_CREDITS' },
          { status: 400 }
        );
      }
      updates.credits = credits;
    }

    if (semester !== undefined) {
      if (!Number.isInteger(semester) || semester < 1) {
        return NextResponse.json(
          { error: 'Semester must be a positive integer', code: 'INVALID_SEMESTER' },
          { status: 400 }
        );
      }
      updates.semester = semester;
    }

    if (departmentId !== undefined) {
      if (!Number.isInteger(departmentId) || departmentId < 1) {
        return NextResponse.json(
          { error: 'Department ID must be a valid integer', code: 'INVALID_DEPARTMENT_ID' },
          { status: 400 }
        );
      }
      updates.departmentId = departmentId;
    }

    // If no fields to update
    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: 'No valid fields provided for update', code: 'NO_UPDATE_FIELDS' },
        { status: 400 }
      );
    }

    // Update course
    const updated = await db
      .update(course)
      .set(updates)
      .where(eq(course.courseId, parseInt(id)))
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

    const courseId = parseInt(id);

    // Check if course exists
    const existing = await db
      .select()
      .from(course)
      .where(eq(course.courseId, courseId))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Course not found', code: 'COURSE_NOT_FOUND' },
        { status: 404 }
      );
    }

    // Check for dependent records in subject table
    const relatedSubjects = await db
      .select()
      .from(subject)
      .where(eq(subject.courseId, courseId))
      .limit(1);

    if (relatedSubjects.length > 0) {
      return NextResponse.json(
        { 
          error: 'Cannot delete course because it has associated subjects. Please delete the subjects first.', 
          code: 'COURSE_HAS_SUBJECTS' 
        },
        { status: 400 }
      );
    }

    // Check for dependent records in enrolled_in table
    const relatedEnrollments = await db
      .select()
      .from(enrolledIn)
      .where(eq(enrolledIn.courseId, courseId))
      .limit(1);

    if (relatedEnrollments.length > 0) {
      return NextResponse.json(
        { 
          error: 'Cannot delete course because students are enrolled in it. Please remove enrollments first.', 
          code: 'COURSE_HAS_ENROLLMENTS' 
        },
        { status: 400 }
      );
    }

    // Delete course
    const deleted = await db
      .delete(course)
      .where(eq(course.courseId, courseId))
      .returning();

    return NextResponse.json(
      {
        message: 'Course deleted successfully',
        course: deleted[0],
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