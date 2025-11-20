import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../db';
import { student } from '../../db/schema';
import { eq, like, or } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single student by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const result = await db
        .select()
        .from(student)
        .where(eq(student.studentId, parseInt(id)))
        .limit(1);

      if (result.length === 0) {
        return NextResponse.json(
          { error: 'Student not found', code: 'STUDENT_NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(result[0], { status: 200 });
    }

    // List students with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');

    let query = db.select().from(student);

    if (search) {
      query = query.where(
        or(
          like(student.name, `%${search}%`),
          like(student.email, `%${search}%`)
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
    const { name, email, dateOfBirth, gender, address, phone, departmentId } = body;

    // Validate required fields
    if (!name) {
      return NextResponse.json(
        { error: 'Name is required', code: 'MISSING_NAME' },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required', code: 'MISSING_EMAIL' },
        { status: 400 }
      );
    }

    if (!dateOfBirth) {
      return NextResponse.json(
        { error: 'Date of birth is required', code: 'MISSING_DATE_OF_BIRTH' },
        { status: 400 }
      );
    }

    if (!gender) {
      return NextResponse.json(
        { error: 'Gender is required', code: 'MISSING_GENDER' },
        { status: 400 }
      );
    }

    if (!address) {
      return NextResponse.json(
        { error: 'Address is required', code: 'MISSING_ADDRESS' },
        { status: 400 }
      );
    }

    if (!phone) {
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
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedName = name.trim();
    const sanitizedGender = gender.trim();
    const sanitizedAddress = address.trim();
    const sanitizedPhone = phone.trim();

    // Insert new student
    const newStudent = await db
      .insert(student)
      .values({
        name: sanitizedName,
        email: sanitizedEmail,
        dateOfBirth,
        gender: sanitizedGender,
        address: sanitizedAddress,
        phone: sanitizedPhone,
        departmentId: parseInt(departmentId),
      })
      .returning();

    return NextResponse.json(newStudent[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);

    // Handle unique constraint violation for email
    if ((error as Error).message.includes('UNIQUE constraint failed')) {
      return NextResponse.json(
        { error: 'Email already exists', code: 'EMAIL_EXISTS' },
        { status: 400 }
      );
    }

    // Handle foreign key constraint violation
    if ((error as Error).message.includes('FOREIGN KEY constraint failed')) {
      return NextResponse.json(
        { error: 'Invalid department ID', code: 'INVALID_DEPARTMENT_ID' },
        { status: 400 }
      );
    }

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
    const updates: Record<string, any> = {};

    // Build update object with only provided fields
    if (body.name !== undefined) {
      updates.name = body.name.trim();
    }
    if (body.email !== undefined) {
      updates.email = body.email.trim().toLowerCase();
    }
    if (body.dateOfBirth !== undefined) {
      updates.dateOfBirth = body.dateOfBirth;
    }
    if (body.gender !== undefined) {
      updates.gender = body.gender.trim();
    }
    if (body.address !== undefined) {
      updates.address = body.address.trim();
    }
    if (body.phone !== undefined) {
      updates.phone = body.phone.trim();
    }
    if (body.departmentId !== undefined) {
      updates.departmentId = parseInt(body.departmentId);
    }

    // Update student
    const updatedStudent = await db
      .update(student)
      .set(updates)
      .where(eq(student.studentId, parseInt(id)))
      .returning();

    return NextResponse.json(updatedStudent[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);

    // Handle unique constraint violation for email
    if ((error as Error).message.includes('UNIQUE constraint failed')) {
      return NextResponse.json(
        { error: 'Email already exists', code: 'EMAIL_EXISTS' },
        { status: 400 }
      );
    }

    // Handle foreign key constraint violation
    if ((error as Error).message.includes('FOREIGN KEY constraint failed')) {
      return NextResponse.json(
        { error: 'Invalid department ID', code: 'INVALID_DEPARTMENT_ID' },
        { status: 400 }
      );
    }

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

    // Delete student
    const deletedStudent = await db
      .delete(student)
      .where(eq(student.studentId, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Student deleted successfully',
        student: deletedStudent[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);

    // Handle foreign key constraint violation (student enrolled in courses)
    if ((error as Error).message.includes('FOREIGN KEY constraint failed')) {
      return NextResponse.json(
        {
          error: 'Cannot delete student with existing enrollments',
          code: 'STUDENT_HAS_ENROLLMENTS',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}