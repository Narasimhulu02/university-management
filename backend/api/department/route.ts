import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../db';
import { department } from '../../db/schema';
import { eq, like, or } from 'drizzle-orm';

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

      const result = await db
        .select()
        .from(department)
        .where(eq(department.departmentId, parseInt(id)))
        .limit(1);

      if (result.length === 0) {
        return NextResponse.json(
          { error: 'Department not found', code: 'DEPARTMENT_NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(result[0], { status: 200 });
    }

    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');

    let query = db.select().from(department);

    if (search) {
      query = query.where(
        or(
          like(department.name, `%${search}%`),
          like(department.building, `%${search}%`)
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
    const { name, building, hodId, universityId } = body;

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required', code: 'MISSING_NAME' },
        { status: 400 }
      );
    }

    if (!building) {
      return NextResponse.json(
        { error: 'Building is required', code: 'MISSING_BUILDING' },
        { status: 400 }
      );
    }

    if (!universityId) {
      return NextResponse.json(
        { error: 'University ID is required', code: 'MISSING_UNIVERSITY_ID' },
        { status: 400 }
      );
    }

    const insertData: {
      name: string;
      building: string;
      universityId: number;
      hodId?: number;
    } = {
      name: name.trim(),
      building: building.trim(),
      universityId: parseInt(universityId),
    };

    if (hodId !== undefined && hodId !== null) {
      insertData.hodId = parseInt(hodId);
    }

    const insertResult = await db
      .insert(department)
      .values(insertData);
    
    const insertedId = (insertResult as any).insertId ?? (insertResult as any)[0]?.insertId;
    const newDepartment = await db
      .select()
      .from(department)
      .where(eq(department.departmentId, insertedId));

    return NextResponse.json(newDepartment[0], { status: 201 });
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

    const existing = await db
      .select()
      .from(department)
      .where(eq(department.departmentId, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Department not found', code: 'DEPARTMENT_NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { name, building, hodId, universityId } = body;

    const updates: {
      name?: string;
      building?: string;
      hodId?: number | null;
      universityId?: number;
    } = {};

    if (name !== undefined) {
      updates.name = name.trim();
    }

    if (building !== undefined) {
      updates.building = building.trim();
    }

    if (hodId !== undefined) {
      updates.hodId = hodId === null ? null : parseInt(hodId);
    }

    if (universityId !== undefined) {
      updates.universityId = parseInt(universityId);
    }

    await db
      .update(department)
      .set(updates)
      .where(eq(department.departmentId, parseInt(id)));
    
    const updated = await db
      .select()
      .from(department)
      .where(eq(department.departmentId, parseInt(id)));

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

    const departmentId = parseInt(id);

    const existing = await db
      .select()
      .from(department)
      .where(eq(department.departmentId, departmentId))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Department not found', code: 'DEPARTMENT_NOT_FOUND' },
        { status: 404 }
      );
    }

    // Check for dependent records
    const { faculty: facultyTable, student: studentTable, course: courseTable } = await import('@/db/schema');
    
    // Check for faculty members
    const facultyCount = await db
      .select()
      .from(facultyTable)
      .where(eq(facultyTable.departmentId, departmentId));
    
    if (facultyCount.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete department because it has associated faculty members. Please remove faculty first.' },
        { status: 400 }
      );
    }

    // Check for students
    const studentCount = await db
      .select()
      .from(studentTable)
      .where(eq(studentTable.departmentId, departmentId));
    
    if (studentCount.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete department because it has associated students. Please remove students first.' },
        { status: 400 }
      );
    }

    // Check for courses
    const courseCount = await db
      .select()
      .from(courseTable)
      .where(eq(courseTable.departmentId, departmentId));
    
    if (courseCount.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete department because it has associated courses. Please remove courses first.' },
        { status: 400 }
      );
    }

    const deleted = await db
      .select()
      .from(department)
      .where(eq(department.departmentId, departmentId));
    
    await db
      .delete(department)
      .where(eq(department.departmentId, departmentId));

    return NextResponse.json(
      {
        message: 'Department deleted successfully',
        department: deleted[0],
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