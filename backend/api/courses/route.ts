import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { course, department } from '@/db/schema';
import { eq, like, and, or, desc, inArray } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const universityId = searchParams.get('universityId');

    // Single course fetch by ID
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

    // List courses with pagination, search, and filters
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const semester = searchParams.get('semester');
    const departmentId = searchParams.get('departmentId');
    const sort = searchParams.get('sort') ?? 'courseId';
    const order = searchParams.get('order') ?? 'desc';

    // Filter by university if provided
    let departmentIds: number[] = [];
    if (universityId) {
      const depts = await db
        .select()
        .from(department)
        .where(eq(department.universityId, parseInt(universityId)));
      departmentIds = depts.map(d => d.departmentId);
      
      if (departmentIds.length === 0) {
        return NextResponse.json([], { status: 200 });
      }
    }

    let query = db.select().from(course);

    // Build filter conditions
    const conditions = [];

    if (search) {
      conditions.push(like(course.courseName, `%${search}%`));
    }

    if (semester) {
      const semesterInt = parseInt(semester);
      if (!isNaN(semesterInt)) {
        conditions.push(eq(course.semester, semesterInt));
      }
    }

    if (departmentId) {
      const deptId = parseInt(departmentId);
      if (!isNaN(deptId)) {
        conditions.push(eq(course.departmentId, deptId));
      }
    }
    
    if (departmentIds.length > 0) {
      conditions.push(inArray(course.departmentId, departmentIds));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Apply sorting
    const sortColumn = sort === 'courseName' ? course.courseName : 
                      sort === 'credits' ? course.credits :
                      sort === 'semester' ? course.semester :
                      course.courseId;
    
    query = order === 'asc' ? query.orderBy(sortColumn) : query.orderBy(desc(sortColumn));

    // Apply pagination
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
    if (!courseName || courseName.trim() === '') {
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

    // Validate credits and semester are positive integers
    const creditsInt = parseInt(credits);
    const semesterInt = parseInt(semester);
    const departmentIdInt = parseInt(departmentId);

    if (isNaN(creditsInt) || creditsInt <= 0) {
      return NextResponse.json(
        { error: 'Credits must be a positive integer', code: 'INVALID_CREDITS' },
        { status: 400 }
      );
    }

    if (isNaN(semesterInt) || semesterInt <= 0) {
      return NextResponse.json(
        { error: 'Semester must be a positive integer', code: 'INVALID_SEMESTER' },
        { status: 400 }
      );
    }

    if (isNaN(departmentIdInt)) {
      return NextResponse.json(
        { error: 'Department ID must be a valid integer', code: 'INVALID_DEPARTMENT_ID' },
        { status: 400 }
      );
    }

    // Verify department exists
    const deptExists = await db
      .select()
      .from(department)
      .where(eq(department.departmentId, departmentIdInt))
      .limit(1);

    if (deptExists.length === 0) {
      return NextResponse.json(
        { error: 'Department not found', code: 'DEPARTMENT_NOT_FOUND' },
        { status: 400 }
      );
    }

    // Insert new course
    const newCourse = await db
      .insert(course)
      .values({
        courseName: courseName.trim(),
        credits: creditsInt,
        semester: semesterInt,
        departmentId: departmentIdInt,
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
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    // Validate ID
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

    const body = await request.json();
    const updates: any = {};

    // Validate and prepare updates
    if (body.courseName !== undefined) {
      if (!body.courseName || body.courseName.trim() === '') {
        return NextResponse.json(
          { error: 'Course name cannot be empty', code: 'INVALID_COURSE_NAME' },
          { status: 400 }
        );
      }
      updates.courseName = body.courseName.trim();
    }

    if (body.credits !== undefined) {
      const creditsInt = parseInt(body.credits);
      if (isNaN(creditsInt) || creditsInt <= 0) {
        return NextResponse.json(
          { error: 'Credits must be a positive integer', code: 'INVALID_CREDITS' },
          { status: 400 }
        );
      }
      updates.credits = creditsInt;
    }

    if (body.semester !== undefined) {
      const semesterInt = parseInt(body.semester);
      if (isNaN(semesterInt) || semesterInt <= 0) {
        return NextResponse.json(
          { error: 'Semester must be a positive integer', code: 'INVALID_SEMESTER' },
          { status: 400 }
        );
      }
      updates.semester = semesterInt;
    }

    if (body.departmentId !== undefined) {
      const departmentIdInt = parseInt(body.departmentId);
      if (isNaN(departmentIdInt)) {
        return NextResponse.json(
          { error: 'Department ID must be a valid integer', code: 'INVALID_DEPARTMENT_ID' },
          { status: 400 }
        );
      }

      // Verify department exists
      const deptExists = await db
        .select()
        .from(department)
        .where(eq(department.departmentId, departmentIdInt))
        .limit(1);

      if (deptExists.length === 0) {
        return NextResponse.json(
          { error: 'Department not found', code: 'DEPARTMENT_NOT_FOUND' },
          { status: 400 }
        );
      }

      updates.departmentId = departmentIdInt;
    }

    // Check if there are any updates to apply
    if (Object.keys(updates).length === 0) {
      return NextResponse.json(existing[0], { status: 200 });
    }

    // Update course
    const updated = await db
      .update(course)
      .set(updates)
      .where(eq(course.courseId, courseId))
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
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    // Validate ID
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