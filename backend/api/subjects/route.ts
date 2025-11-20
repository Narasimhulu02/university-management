import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { subject, course, department } from '@/db/schema';
import { eq, like, and, or, desc, inArray } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single record fetch
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const record = await db.select()
        .from(subject)
        .where(eq(subject.subjectId, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json({ 
          error: 'Subject not found',
          code: "SUBJECT_NOT_FOUND" 
        }, { status: 404 });
      }

      return NextResponse.json(record[0], { status: 200 });
    }

    // List with pagination, search, and filters
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const courseId = searchParams.get('courseId');
    const facultyId = searchParams.get('facultyId');
    const universityId = searchParams.get('universityId');
    const sort = searchParams.get('sort') ?? 'subjectId';
    const order = searchParams.get('order') ?? 'desc';

    let query = db.select().from(subject);

    // Build conditions array
    const conditions = [];

    // Filter by university
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
          conditions.push(inArray(subject.courseId, courseIds));
        } else {
          return NextResponse.json([], { status: 200 });
        }
      } else {
        return NextResponse.json([], { status: 200 });
      }
    }

    if (search) {
      conditions.push(like(subject.name, `%${search}%`));
    }

    if (courseId && !isNaN(parseInt(courseId))) {
      conditions.push(eq(subject.courseId, parseInt(courseId)));
    }

    if (facultyId && !isNaN(parseInt(facultyId))) {
      conditions.push(eq(subject.facultyId, parseInt(facultyId)));
    }

    // Apply conditions
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Apply sorting
    const sortColumn = subject[sort as keyof typeof subject] || subject.subjectId;
    query = order === 'asc' 
      ? query.orderBy(sortColumn)
      : query.orderBy(desc(sortColumn));

    const results = await query.limit(limit).offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, credits, courseId, facultyId } = body;

    // Validate required fields
    if (!name || name.trim() === '') {
      return NextResponse.json({ 
        error: "Name is required",
        code: "MISSING_NAME" 
      }, { status: 400 });
    }

    if (credits === undefined || credits === null) {
      return NextResponse.json({ 
        error: "Credits is required",
        code: "MISSING_CREDITS" 
      }, { status: 400 });
    }

    if (!courseId) {
      return NextResponse.json({ 
        error: "Course ID is required",
        code: "MISSING_COURSE_ID" 
      }, { status: 400 });
    }

    if (!facultyId) {
      return NextResponse.json({ 
        error: "Faculty ID is required",
        code: "MISSING_FACULTY_ID" 
      }, { status: 400 });
    }

    // Validate credits is a positive integer
    const creditsInt = parseInt(credits);
    if (isNaN(creditsInt) || creditsInt <= 0) {
      return NextResponse.json({ 
        error: "Credits must be a positive integer",
        code: "INVALID_CREDITS" 
      }, { status: 400 });
    }

    // Validate courseId is a valid integer
    const courseIdInt = parseInt(courseId);
    if (isNaN(courseIdInt)) {
      return NextResponse.json({ 
        error: "Course ID must be a valid integer",
        code: "INVALID_COURSE_ID" 
      }, { status: 400 });
    }

    // Validate facultyId is a valid integer
    const facultyIdInt = parseInt(facultyId);
    if (isNaN(facultyIdInt)) {
      return NextResponse.json({ 
        error: "Faculty ID must be a valid integer",
        code: "INVALID_FACULTY_ID" 
      }, { status: 400 });
    }

    // Insert new subject
    const newSubject = await db.insert(subject)
      .values({
        name: name.trim(),
        credits: creditsInt,
        courseId: courseIdInt,
        facultyId: facultyIdInt
      })
      .returning();

    return NextResponse.json(newSubject[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Validate ID
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    const subjectId = parseInt(id);

    // Check if subject exists
    const existing = await db.select()
      .from(subject)
      .where(eq(subject.subjectId, subjectId))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Subject not found',
        code: "SUBJECT_NOT_FOUND" 
      }, { status: 404 });
    }

    const body = await request.json();
    const { name, credits, courseId, facultyId } = body;

    // Build update object with only provided fields
    const updates: any = {};

    if (name !== undefined) {
      if (name.trim() === '') {
        return NextResponse.json({ 
          error: "Name cannot be empty",
          code: "INVALID_NAME" 
        }, { status: 400 });
      }
      updates.name = name.trim();
    }

    if (credits !== undefined) {
      const creditsInt = parseInt(credits);
      if (isNaN(creditsInt) || creditsInt <= 0) {
        return NextResponse.json({ 
          error: "Credits must be a positive integer",
          code: "INVALID_CREDITS" 
        }, { status: 400 });
      }
      updates.credits = creditsInt;
    }

    if (courseId !== undefined) {
      const courseIdInt = parseInt(courseId);
      if (isNaN(courseIdInt)) {
        return NextResponse.json({ 
          error: "Course ID must be a valid integer",
          code: "INVALID_COURSE_ID" 
        }, { status: 400 });
      }
      updates.courseId = courseIdInt;
    }

    if (facultyId !== undefined) {
      const facultyIdInt = parseInt(facultyId);
      if (isNaN(facultyIdInt)) {
        return NextResponse.json({ 
          error: "Faculty ID must be a valid integer",
          code: "INVALID_FACULTY_ID" 
        }, { status: 400 });
      }
      updates.facultyId = facultyIdInt;
    }

    // Check if there are any updates
    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ 
        error: "No valid fields to update",
        code: "NO_UPDATES" 
      }, { status: 400 });
    }

    // Update subject
    const updated = await db.update(subject)
      .set(updates)
      .where(eq(subject.subjectId, subjectId))
      .returning();

    return NextResponse.json(updated[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Validate ID
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    const subjectId = parseInt(id);

    // Check if subject exists
    const existing = await db.select()
      .from(subject)
      .where(eq(subject.subjectId, subjectId))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Subject not found',
        code: "SUBJECT_NOT_FOUND" 
      }, { status: 404 });
    }

    // Delete subject
    const deleted = await db.delete(subject)
      .where(eq(subject.subjectId, subjectId))
      .returning();

    return NextResponse.json({ 
      message: 'Subject deleted successfully',
      subject: deleted[0]
    }, { status: 200 });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}