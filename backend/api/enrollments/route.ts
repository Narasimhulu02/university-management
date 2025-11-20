import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { enrolledIn, student, course, department } from '@/db/schema';
import { eq, and, inArray } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const studentId = searchParams.get('studentId');
    const courseId = searchParams.get('courseId');
    const universityId = searchParams.get('universityId');

    let query = db.select().from(enrolledIn);

    // Apply filters
    const filters = [];
    
    // Filter by university
    if (universityId && !isNaN(parseInt(universityId))) {
      const univId = parseInt(universityId);
      
      // Get all departments for this university
      const depts = await db.select({ departmentId: department.departmentId })
        .from(department)
        .where(eq(department.universityId, univId));
      
      const deptIds = depts.map(d => d.departmentId);
      
      if (deptIds.length > 0) {
        // Get students from these departments
        const students = await db.select({ studentId: student.studentId })
          .from(student)
          .where(inArray(student.departmentId, deptIds));
        
        const studentIds = students.map(s => s.studentId);
        
        // Get courses from these departments
        const courses = await db.select({ courseId: course.courseId })
          .from(course)
          .where(inArray(course.departmentId, deptIds));
        
        const courseIds = courses.map(c => c.courseId);
        
        if (studentIds.length > 0 && courseIds.length > 0) {
          filters.push(inArray(enrolledIn.studentId, studentIds));
          filters.push(inArray(enrolledIn.courseId, courseIds));
        } else {
          return NextResponse.json([], { status: 200 });
        }
      } else {
        return NextResponse.json([], { status: 200 });
      }
    }
    
    if (studentId) {
      const parsedStudentId = parseInt(studentId);
      if (!isNaN(parsedStudentId)) {
        filters.push(eq(enrolledIn.studentId, parsedStudentId));
      }
    }
    if (courseId) {
      const parsedCourseId = parseInt(courseId);
      if (!isNaN(parsedCourseId)) {
        filters.push(eq(enrolledIn.courseId, parsedCourseId));
      }
    }

    if (filters.length > 0) {
      query = query.where(and(...filters));
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
    const { studentId, courseId, grade } = body;

    // Validate required fields
    if (!studentId) {
      return NextResponse.json(
        { error: 'studentId is required', code: 'MISSING_STUDENT_ID' },
        { status: 400 }
      );
    }

    if (!courseId) {
      return NextResponse.json(
        { error: 'courseId is required', code: 'MISSING_COURSE_ID' },
        { status: 400 }
      );
    }

    // Validate field types
    if (isNaN(parseInt(studentId))) {
      return NextResponse.json(
        { error: 'studentId must be a valid integer', code: 'INVALID_STUDENT_ID' },
        { status: 400 }
      );
    }

    if (isNaN(parseInt(courseId))) {
      return NextResponse.json(
        { error: 'courseId must be a valid integer', code: 'INVALID_COURSE_ID' },
        { status: 400 }
      );
    }

    // Prepare enrollment data
    const enrollmentData: any = {
      studentId: parseInt(studentId),
      courseId: parseInt(courseId),
    };

    // Add optional grade if provided
    if (grade !== undefined && grade !== null) {
      enrollmentData.grade = typeof grade === 'string' ? grade.trim() : String(grade);
    }

    const newEnrollment = await db
      .insert(enrolledIn)
      .values(enrollmentData)
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

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    // Validate ID
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid id is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const enrollmentId = parseInt(id);

    // Check if enrollment exists
    const existingEnrollment = await db
      .select()
      .from(enrolledIn)
      .where(eq(enrolledIn.id, enrollmentId))
      .limit(1);

    if (existingEnrollment.length === 0) {
      return NextResponse.json(
        { error: 'Enrollment not found', code: 'ENROLLMENT_NOT_FOUND' },
        { status: 404 }
      );
    }

    // Delete the enrollment
    const deleted = await db
      .delete(enrolledIn)
      .where(eq(enrolledIn.id, enrollmentId))
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