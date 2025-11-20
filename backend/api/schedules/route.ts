import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { scheduledIn, subject, course, department } from '@/db/schema';
import { eq, and, inArray } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const subjectId = searchParams.get('subjectId');
    const classroomId = searchParams.get('classroomId');
    const day = searchParams.get('day');
    const timeSlot = searchParams.get('timeSlot');
    const universityId = searchParams.get('universityId');

    let query = db.select().from(scheduledIn);

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
          // Get subjects for these courses
          const subjects = await db.select({ subjectId: subject.subjectId })
            .from(subject)
            .where(inArray(subject.courseId, courseIds));
          
          const subjectIds = subjects.map(s => s.subjectId);
          
          if (subjectIds.length > 0) {
            conditions.push(inArray(scheduledIn.subjectId, subjectIds));
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
    
    if (subjectId) {
      conditions.push(eq(scheduledIn.subjectId, parseInt(subjectId)));
    }
    if (classroomId) {
      conditions.push(eq(scheduledIn.classroomId, parseInt(classroomId)));
    }
    if (day) {
      conditions.push(eq(scheduledIn.day, day));
    }
    if (timeSlot) {
      conditions.push(eq(scheduledIn.timeSlot, timeSlot));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
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

    if (!subjectId || typeof subjectId !== 'number') {
      return NextResponse.json(
        { error: 'Valid subjectId is required', code: 'MISSING_SUBJECT_ID' },
        { status: 400 }
      );
    }

    if (!classroomId || typeof classroomId !== 'number') {
      return NextResponse.json(
        { error: 'Valid classroomId is required', code: 'MISSING_CLASSROOM_ID' },
        { status: 400 }
      );
    }

    if (!day || typeof day !== 'string' || day.trim() === '') {
      return NextResponse.json(
        { error: 'Day is required and must be a non-empty string', code: 'MISSING_DAY' },
        { status: 400 }
      );
    }

    if (!timeSlot || typeof timeSlot !== 'string' || timeSlot.trim() === '') {
      return NextResponse.json(
        { error: 'Time slot is required and must be a non-empty string', code: 'MISSING_TIME_SLOT' },
        { status: 400 }
      );
    }

    const newSchedule = await db.insert(scheduledIn)
      .values({
        subjectId,
        classroomId,
        day: day.trim(),
        timeSlot: timeSlot.trim(),
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

    const existing = await db.select()
      .from(scheduledIn)
      .where(eq(scheduledIn.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Schedule not found', code: 'SCHEDULE_NOT_FOUND' },
        { status: 404 }
      );
    }

    const deleted = await db.delete(scheduledIn)
      .where(eq(scheduledIn.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      { message: 'Schedule deleted successfully', schedule: deleted[0] },
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