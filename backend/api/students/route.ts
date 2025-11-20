import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { student, department } from '@/db/schema';
import { eq, like, and, or, desc, inArray } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const universityId = searchParams.get('universityId');

    // Single student by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid student ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const studentRecord = await db
        .select()
        .from(student)
        .where(eq(student.studentId, parseInt(id)))
        .limit(1);

      if (studentRecord.length === 0) {
        return NextResponse.json(
          { error: 'Student not found', code: 'STUDENT_NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(studentRecord[0], { status: 200 });
    }

    // List with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort') ?? 'studentId';
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

    let query = db.select().from(student);

    const conditions = [];
    
    if (search) {
      conditions.push(
        or(
          like(student.name, `%${search}%`),
          like(student.email, `%${search}%`),
          like(student.gender, `%${search}%`)
        )
      );
    }
    
    if (departmentIds.length > 0) {
      conditions.push(inArray(student.departmentId, departmentIds));
    }

    if (conditions.length > 0) {
      query = query.where(conditions.length === 1 ? conditions[0] : and(...conditions));
    }

    // Apply sorting
    const sortColumn = student[sort as keyof typeof student] || student.studentId;
    query = order === 'asc' 
      ? query.orderBy(sortColumn)
      : query.orderBy(desc(sortColumn));

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
    const { name, email, dateOfBirth, gender, address, phone, departmentId } = body;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required', code: 'MISSING_NAME' },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: 'Email is required', code: 'MISSING_EMAIL' },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email format', code: 'INVALID_EMAIL' },
        { status: 400 }
      );
    }

    if (!dateOfBirth || !dateOfBirth.trim()) {
      return NextResponse.json(
        { error: 'Date of birth is required', code: 'MISSING_DATE_OF_BIRTH' },
        { status: 400 }
      );
    }

    if (!gender || !gender.trim()) {
      return NextResponse.json(
        { error: 'Gender is required', code: 'MISSING_GENDER' },
        { status: 400 }
      );
    }

    if (!address || !address.trim()) {
      return NextResponse.json(
        { error: 'Address is required', code: 'MISSING_ADDRESS' },
        { status: 400 }
      );
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { error: 'Phone is required', code: 'MISSING_PHONE' },
        { status: 400 }
      );
    }

    if (!departmentId) {
      return NextResponse.json(
        { error: 'Department ID is required', code: 'MISSING_DEPARTMENT_ID' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      dateOfBirth: dateOfBirth.trim(),
      gender: gender.trim(),
      address: address.trim(),
      phone: phone.trim(),
      departmentId: parseInt(departmentId)
    };

    const newStudent = await db
      .insert(student)
      .values(sanitizedData)
      .returning();

    return NextResponse.json(newStudent[0], { status: 201 });
  } catch (error: any) {
    console.error('POST error:', error);
    
    // Handle unique constraint violation
    if (error.message && error.message.includes('UNIQUE constraint failed')) {
      return NextResponse.json(
        { error: 'Email already exists', code: 'EMAIL_EXISTS' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
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
        { error: 'Valid student ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if student exists
    const existingStudent = await db
      .select()
      .from(student)
      .where(eq(student.studentId, parseInt(id)))
      .limit(1);

    if (existingStudent.length === 0) {
      return NextResponse.json(
        { error: 'Student not found', code: 'STUDENT_NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const updates: any = {};

    // Validate and sanitize fields if provided
    if (body.name !== undefined) {
      if (!body.name.trim()) {
        return NextResponse.json(
          { error: 'Name cannot be empty', code: 'INVALID_NAME' },
          { status: 400 }
        );
      }
      updates.name = body.name.trim();
    }

    if (body.email !== undefined) {
      if (!body.email.trim() || !body.email.includes('@')) {
        return NextResponse.json(
          { error: 'Invalid email format', code: 'INVALID_EMAIL' },
          { status: 400 }
        );
      }
      updates.email = body.email.trim().toLowerCase();
    }

    if (body.dateOfBirth !== undefined) {
      if (!body.dateOfBirth.trim()) {
        return NextResponse.json(
          { error: 'Date of birth cannot be empty', code: 'INVALID_DATE_OF_BIRTH' },
          { status: 400 }
        );
      }
      updates.dateOfBirth = body.dateOfBirth.trim();
    }

    if (body.gender !== undefined) {
      if (!body.gender.trim()) {
        return NextResponse.json(
          { error: 'Gender cannot be empty', code: 'INVALID_GENDER' },
          { status: 400 }
        );
      }
      updates.gender = body.gender.trim();
    }

    if (body.address !== undefined) {
      if (!body.address.trim()) {
        return NextResponse.json(
          { error: 'Address cannot be empty', code: 'INVALID_ADDRESS' },
          { status: 400 }
        );
      }
      updates.address = body.address.trim();
    }

    if (body.phone !== undefined) {
      if (!body.phone.trim()) {
        return NextResponse.json(
          { error: 'Phone cannot be empty', code: 'INVALID_PHONE' },
          { status: 400 }
        );
      }
      updates.phone = body.phone.trim();
    }

    if (body.departmentId !== undefined) {
      updates.departmentId = parseInt(body.departmentId);
    }

    const updatedStudent = await db
      .update(student)
      .set(updates)
      .where(eq(student.studentId, parseInt(id)))
      .returning();

    return NextResponse.json(updatedStudent[0], { status: 200 });
  } catch (error: any) {
    console.error('PUT error:', error);

    // Handle unique constraint violation
    if (error.message && error.message.includes('UNIQUE constraint failed')) {
      return NextResponse.json(
        { error: 'Email already exists', code: 'EMAIL_EXISTS' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
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
        { error: 'Valid student ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if student exists
    const existingStudent = await db
      .select()
      .from(student)
      .where(eq(student.studentId, parseInt(id)))
      .limit(1);

    if (existingStudent.length === 0) {
      return NextResponse.json(
        { error: 'Student not found', code: 'STUDENT_NOT_FOUND' },
        { status: 404 }
      );
    }

    const deletedStudent = await db
      .delete(student)
      .where(eq(student.studentId, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Student deleted successfully',
        student: deletedStudent[0]
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