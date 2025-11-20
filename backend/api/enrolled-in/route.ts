import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { enrolledIn } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single record by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const enrollment = await db
        .select()
        .from(enrolledIn)
        .where(eq(enrolledIn.id, parseInt(id)))
        .limit(1);

      if (enrollment.length === 0) {
        return NextResponse.json(
          { error: 'Enrollment not found', code: 'NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(enrollment[0], { status: 200 });
    }

    // List with pagination
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');

    const enrollments = await db
      .select()
      .from(enrolledIn)
      .limit(limit)
      .offset(offset);

    return NextResponse.json(enrollments, { status: 200 });
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
    const { studentId, courseId, grade } = body;

    // Validate required fields
    if (!studentId) {
      return NextResponse.json(
        { error: 'Student ID is required', code: 'MISSING_STUDENT_ID' },
        { status: 400 }
      );
    }

    if (!courseId) {
      return NextResponse.json(
        { error: 'Course ID is required', code: 'MISSING_COURSE_ID' },
        { status: 400 }
      );
    }

    // Validate studentId and courseId are valid integers
    if (isNaN(parseInt(studentId))) {
      return NextResponse.json(
        { error: 'Student ID must be a valid integer', code: 'INVALID_STUDENT_ID' },
        { status: 400 }
      );
    }

    if (isNaN(parseInt(courseId))) {
      return NextResponse.json(
        { error: 'Course ID must be a valid integer', code: 'INVALID_COURSE_ID' },
        { status: 400 }
      );
    }

    // Prepare insert data
    const insertData: {
      studentId: number;
      courseId: number;
      grade?: string;
    } = {
      studentId: parseInt(studentId),
      courseId: parseInt(courseId),
    };

    if (grade !== undefined && grade !== null) {
      insertData.grade = grade.toString().trim();
    }

    // Insert enrollment
    const newEnrollment = await db
      .insert(enrolledIn)
      .values(insertData)
      .returning();

    return NextResponse.json(newEnrollment[0], { status: 201 });
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

    // Check if enrollment exists
    const existing = await db
      .select()
      .from(enrolledIn)
      .where(eq(enrolledIn.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Enrollment not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { studentId, courseId, grade } = body;

    // Prepare update data
    const updateData: {
      studentId?: number;
      courseId?: number;
      grade?: string | null;
    } = {};

    if (studentId !== undefined) {
      if (isNaN(parseInt(studentId))) {
        return NextResponse.json(
          { error: 'Student ID must be a valid integer', code: 'INVALID_STUDENT_ID' },
          { status: 400 }
        );
      }
      updateData.studentId = parseInt(studentId);
    }

    if (courseId !== undefined) {
      if (isNaN(parseInt(courseId))) {
        return NextResponse.json(
          { error: 'Course ID must be a valid integer', code: 'INVALID_COURSE_ID' },
          { status: 400 }
        );
      }
      updateData.courseId = parseInt(courseId);
    }

    if (grade !== undefined) {
      updateData.grade = grade === null ? null : grade.toString().trim();
    }

    // Update enrollment
    const updated = await db
      .update(enrolledIn)
      .set(updateData)
      .where(eq(enrolledIn.id, parseInt(id)))
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

    // Validate ID parameter
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if enrollment exists
    const existing = await db
      .select()
      .from(enrolledIn)
      .where(eq(enrolledIn.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Enrollment not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    // Delete enrollment
    const deleted = await db
      .delete(enrolledIn)
      .where(eq(enrolledIn.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Enrollment deleted successfully',
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