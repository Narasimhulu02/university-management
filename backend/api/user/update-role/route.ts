import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { user } from '@/db/schema';
import { eq } from 'drizzle-orm';

const VALID_ROLES = ['student', 'teacher', 'admin'] as const;
type ValidRole = typeof VALID_ROLES[number];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, role } = body;

    // Validate userId
    if (!userId || typeof userId !== 'string' || userId.trim() === '') {
      return NextResponse.json(
        {
          success: false,
          message: 'userId is required',
          code: 'MISSING_USER_ID'
        },
        { status: 400 }
      );
    }

    // Validate role
    if (!role || typeof role !== 'string' || role.trim() === '') {
      return NextResponse.json(
        {
          success: false,
          message: 'role is required',
          code: 'MISSING_ROLE'
        },
        { status: 400 }
      );
    }

    // Validate role is one of the allowed values
    const normalizedRole = role.toLowerCase().trim();
    if (!VALID_ROLES.includes(normalizedRole as ValidRole)) {
      return NextResponse.json(
        {
          success: false,
          message: 'role must be one of: student, teacher, admin',
          code: 'INVALID_ROLE'
        },
        { status: 400 }
      );
    }

    const trimmedUserId = userId.trim();

    // Check if user exists
    const existingUser = await db
      .select()
      .from(user)
      .where(eq(user.id, trimmedUserId))
      .limit(1);

    if (existingUser.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'User not found',
          code: 'USER_NOT_FOUND'
        },
        { status: 404 }
      );
    }

    // Update user role
    const updatedUser = await db
      .update(user)
      .set({
        role: normalizedRole as ValidRole,
        updatedAt: new Date()
      })
      .where(eq(user.id, trimmedUserId))
      .returning();

    return NextResponse.json(
      {
        success: true,
        message: 'User role updated successfully',
        user: updatedUser[0]
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error')
      },
      { status: 500 }
    );
  }
}