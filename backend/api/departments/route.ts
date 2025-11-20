import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { department } from '@/db/schema';
import { eq, like, and, or, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const universityId = searchParams.get('universityId');

    // Single department by ID
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

    // List departments with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort') ?? 'departmentId';
    const order = searchParams.get('order') ?? 'desc';

    let query = db.select().from(department);

    const conditions = [];
    
    if (search) {
      conditions.push(
        or(
          like(department.name, `%${search}%`),
          like(department.building, `%${search}%`)
        )
      );
    }
    
    if (universityId) {
      conditions.push(eq(department.universityId, parseInt(universityId)));
    }

    if (conditions.length > 0) {
      query = query.where(conditions.length === 1 ? conditions[0] : and(...conditions));
    }

    const sortColumn = department[sort as keyof typeof department] ?? department.departmentId;
    query = order === 'asc' ? query.orderBy(sortColumn) : query.orderBy(desc(sortColumn));

    const results = await query.limit(limit).offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error: any) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, building, hodId, universityId } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { error: 'Name is required and must be a non-empty string', code: 'INVALID_NAME' },
        { status: 400 }
      );
    }

    if (!building || typeof building !== 'string' || building.trim() === '') {
      return NextResponse.json(
        { error: 'Building is required and must be a non-empty string', code: 'INVALID_BUILDING' },
        { status: 400 }
      );
    }

    if (!universityId || isNaN(parseInt(universityId.toString()))) {
      return NextResponse.json(
        { error: 'Valid universityId is required', code: 'INVALID_UNIVERSITY_ID' },
        { status: 400 }
      );
    }

    if (hodId !== undefined && hodId !== null && isNaN(parseInt(hodId.toString()))) {
      return NextResponse.json(
        { error: 'hodId must be a valid integer if provided', code: 'INVALID_HOD_ID' },
        { status: 400 }
      );
    }

    // Prepare insert data
    const insertData: any = {
      name: name.trim(),
      building: building.trim(),
      universityId: parseInt(universityId.toString()),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (hodId !== undefined && hodId !== null) {
      insertData.hodId = parseInt(hodId.toString());
    }

    const newDepartment = await db.insert(department).values(insertData).returning();

    return NextResponse.json(newDepartment[0], { status: 201 });
  } catch (error: any) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { name, building, hodId, universityId } = body;

    // Check if department exists
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

    // Validate fields if provided
    if (name !== undefined && (typeof name !== 'string' || name.trim() === '')) {
      return NextResponse.json(
        { error: 'Name must be a non-empty string if provided', code: 'INVALID_NAME' },
        { status: 400 }
      );
    }

    if (building !== undefined && (typeof building !== 'string' || building.trim() === '')) {
      return NextResponse.json(
        { error: 'Building must be a non-empty string if provided', code: 'INVALID_BUILDING' },
        { status: 400 }
      );
    }

    if (universityId !== undefined && isNaN(parseInt(universityId.toString()))) {
      return NextResponse.json(
        { error: 'universityId must be a valid integer if provided', code: 'INVALID_UNIVERSITY_ID' },
        { status: 400 }
      );
    }

    if (hodId !== undefined && hodId !== null && isNaN(parseInt(hodId.toString()))) {
      return NextResponse.json(
        { error: 'hodId must be a valid integer if provided', code: 'INVALID_HOD_ID' },
        { status: 400 }
      );
    }

    // Prepare update data
    const updateData: any = {
      updatedAt: new Date().toISOString(),
    };

    if (name !== undefined) updateData.name = name.trim();
    if (building !== undefined) updateData.building = building.trim();
    if (universityId !== undefined) updateData.universityId = parseInt(universityId.toString());
    if (hodId !== undefined) {
      updateData.hodId = hodId === null ? null : parseInt(hodId.toString());
    }

    const updated = await db
      .update(department)
      .set(updateData)
      .where(eq(department.departmentId, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0], { status: 200 });
  } catch (error: any) {
    console.error('PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if department exists
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

    const deleted = await db
      .delete(department)
      .where(eq(department.departmentId, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Department deleted successfully',
        deletedDepartment: deleted[0],
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}