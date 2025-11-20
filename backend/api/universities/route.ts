import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { university } from '@/db/schema';
import { eq, like, or, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single university by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const result = await db
        .select()
        .from(university)
        .where(eq(university.universityId, parseInt(id)))
        .limit(1);

      if (result.length === 0) {
        return NextResponse.json(
          { error: 'University not found', code: 'NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(result[0], { status: 200 });
    }

    // List universities with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');

    let query = db.select().from(university);

    if (search) {
      query = query.where(
        or(
          like(university.name, `%${search}%`),
          like(university.location, `%${search}%`)
        )
      );
    }

    const results = await query
      .orderBy(desc(university.universityId))
      .limit(limit)
      .offset(offset);

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
    const { name, location, establishedYear } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { error: 'Name is required and must be a non-empty string', code: 'MISSING_NAME' },
        { status: 400 }
      );
    }

    if (!location || typeof location !== 'string' || location.trim() === '') {
      return NextResponse.json(
        { error: 'Location is required and must be a non-empty string', code: 'MISSING_LOCATION' },
        { status: 400 }
      );
    }

    if (!establishedYear || typeof establishedYear !== 'number' || isNaN(establishedYear)) {
      return NextResponse.json(
        { error: 'Established year is required and must be a valid number', code: 'MISSING_ESTABLISHED_YEAR' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim();
    const sanitizedLocation = location.trim();

    // Insert new university
    const newUniversity = await db
      .insert(university)
      .values({
        name: sanitizedName,
        location: sanitizedLocation,
        establishedYear: establishedYear,
      })
      .returning();

    return NextResponse.json(newUniversity[0], { status: 201 });
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

    // Validate ID
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if university exists
    const existing = await db
      .select()
      .from(university)
      .where(eq(university.universityId, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'University not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const updates: any = {};

    // Validate and sanitize updates
    if (body.name !== undefined) {
      if (typeof body.name !== 'string' || body.name.trim() === '') {
        return NextResponse.json(
          { error: 'Name must be a non-empty string', code: 'INVALID_NAME' },
          { status: 400 }
        );
      }
      updates.name = body.name.trim();
    }

    if (body.location !== undefined) {
      if (typeof body.location !== 'string' || body.location.trim() === '') {
        return NextResponse.json(
          { error: 'Location must be a non-empty string', code: 'INVALID_LOCATION' },
          { status: 400 }
        );
      }
      updates.location = body.location.trim();
    }

    if (body.establishedYear !== undefined) {
      if (typeof body.establishedYear !== 'number' || isNaN(body.establishedYear)) {
        return NextResponse.json(
          { error: 'Established year must be a valid number', code: 'INVALID_ESTABLISHED_YEAR' },
          { status: 400 }
        );
      }
      updates.establishedYear = body.establishedYear;
    }

    // Update university
    const updated = await db
      .update(university)
      .set(updates)
      .where(eq(university.universityId, parseInt(id)))
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
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Validate ID
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if university exists
    const existing = await db
      .select()
      .from(university)
      .where(eq(university.universityId, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'University not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    // Delete university
    const deleted = await db
      .delete(university)
      .where(eq(university.universityId, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'University deleted successfully',
        university: deleted[0],
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