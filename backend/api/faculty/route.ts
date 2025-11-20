import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { faculty, department } from '@/db/schema';
import { eq, like, or, desc, inArray, and } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const universityId = searchParams.get('universityId');

    if (id) {
      if (isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const result = await db.select()
        .from(faculty)
        .where(eq(faculty.facultyId, parseInt(id)))
        .limit(1);

      if (result.length === 0) {
        return NextResponse.json({ 
          error: 'Faculty not found',
          code: 'FACULTY_NOT_FOUND' 
        }, { status: 404 });
      }

      return NextResponse.json(result[0], { status: 200 });
    }

    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');

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

    let query = db.select().from(faculty);

    const conditions = [];
    
    if (search) {
      conditions.push(
        or(
          like(faculty.name, `%${search}%`),
          like(faculty.email, `%${search}%`),
          like(faculty.designation, `%${search}%`)
        )
      );
    }
    
    if (departmentIds.length > 0) {
      conditions.push(inArray(faculty.departmentId, departmentIds));
    }

    if (conditions.length > 0) {
      query = query.where(conditions.length === 1 ? conditions[0] : and(...conditions));
    }

    const results = await query
      .orderBy(desc(faculty.facultyId))
      .limit(limit)
      .offset(offset);

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
    const { name, designation, email, phone, departmentId } = body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json({ 
        error: "Name is required and must be a non-empty string",
        code: "INVALID_NAME" 
      }, { status: 400 });
    }

    if (!designation || typeof designation !== 'string' || designation.trim() === '') {
      return NextResponse.json({ 
        error: "Designation is required and must be a non-empty string",
        code: "INVALID_DESIGNATION" 
      }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
      return NextResponse.json({ 
        error: "Email is required and must be a non-empty string",
        code: "INVALID_EMAIL" 
      }, { status: 400 });
    }

    if (!email.includes('@')) {
      return NextResponse.json({ 
        error: "Email must be a valid email address",
        code: "INVALID_EMAIL_FORMAT" 
      }, { status: 400 });
    }

    if (!phone || typeof phone !== 'string' || phone.trim() === '') {
      return NextResponse.json({ 
        error: "Phone is required and must be a non-empty string",
        code: "INVALID_PHONE" 
      }, { status: 400 });
    }

    if (!departmentId || typeof departmentId !== 'number') {
      return NextResponse.json({ 
        error: "Department ID is required and must be a number",
        code: "INVALID_DEPARTMENT_ID" 
      }, { status: 400 });
    }

    const newFaculty = await db.insert(faculty)
      .values({
        name: name.trim(),
        designation: designation.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        departmentId: departmentId
      })
      .returning();

    return NextResponse.json(newFaculty[0], { status: 201 });

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

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    const existing = await db.select()
      .from(faculty)
      .where(eq(faculty.facultyId, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Faculty not found',
        code: 'FACULTY_NOT_FOUND' 
      }, { status: 404 });
    }

    const body = await request.json();
    const updates: Record<string, any> = {};

    if (body.name !== undefined) {
      if (typeof body.name !== 'string' || body.name.trim() === '') {
        return NextResponse.json({ 
          error: "Name must be a non-empty string",
          code: "INVALID_NAME" 
        }, { status: 400 });
      }
      updates.name = body.name.trim();
    }

    if (body.designation !== undefined) {
      if (typeof body.designation !== 'string' || body.designation.trim() === '') {
        return NextResponse.json({ 
          error: "Designation must be a non-empty string",
          code: "INVALID_DESIGNATION" 
        }, { status: 400 });
      }
      updates.designation = body.designation.trim();
    }

    if (body.email !== undefined) {
      if (typeof body.email !== 'string' || body.email.trim() === '') {
        return NextResponse.json({ 
          error: "Email must be a non-empty string",
          code: "INVALID_EMAIL" 
        }, { status: 400 });
      }
      if (!body.email.includes('@')) {
        return NextResponse.json({ 
          error: "Email must be a valid email address",
          code: "INVALID_EMAIL_FORMAT" 
        }, { status: 400 });
      }
      updates.email = body.email.trim().toLowerCase();
    }

    if (body.phone !== undefined) {
      if (typeof body.phone !== 'string' || body.phone.trim() === '') {
        return NextResponse.json({ 
          error: "Phone must be a non-empty string",
          code: "INVALID_PHONE" 
        }, { status: 400 });
      }
      updates.phone = body.phone.trim();
    }

    if (body.departmentId !== undefined) {
      if (typeof body.departmentId !== 'number') {
        return NextResponse.json({ 
          error: "Department ID must be a number",
          code: "INVALID_DEPARTMENT_ID" 
        }, { status: 400 });
      }
      updates.departmentId = body.departmentId;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(existing[0], { status: 200 });
    }

    const updated = await db.update(faculty)
      .set(updates)
      .where(eq(faculty.facultyId, parseInt(id)))
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

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    const facultyId = parseInt(id);

    const existing = await db.select()
      .from(faculty)
      .where(eq(faculty.facultyId, facultyId))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Faculty not found',
        code: 'FACULTY_NOT_FOUND' 
      }, { status: 404 });
    }

    // Check for dependent records
    const { subject: subjectTable } = await import('@/db/schema');
    
    // Check for subjects taught by this faculty
    const subjectCount = await db
      .select()
      .from(subjectTable)
      .where(eq(subjectTable.facultyId, facultyId));
    
    if (subjectCount.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete faculty because they are teaching subjects. Please reassign subjects first.' },
        { status: 400 }
      );
    }

    const deleted = await db.delete(faculty)
      .where(eq(faculty.facultyId, facultyId))
      .returning();

    return NextResponse.json({ 
      message: 'Faculty deleted successfully',
      faculty: deleted[0] 
    }, { status: 200 });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}