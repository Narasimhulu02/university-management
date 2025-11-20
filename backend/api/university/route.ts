import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { university } from '@/db/schema';
import { eq, like, or } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single university by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { 
            error: "Valid ID is required",
            code: "INVALID_ID" 
          },
          { status: 400 }
        );
      }

      const result = await db.select()
        .from(university)
        .where(eq(university.universityId, parseInt(id)))
        .limit(1);

      if (result.length === 0) {
        return NextResponse.json(
          { error: 'University not found' },
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
    const { name, location, establishedYear, university_id } = body;

    // Validate required fields
    if (!name) {
      return NextResponse.json(
        { 
          error: "Name is required",
          code: "MISSING_NAME" 
        },
        { status: 400 }
      );
    }

    if (!location) {
      return NextResponse.json(
        { 
          error: "Location is required",
          code: "MISSING_LOCATION" 
        },
        { status: 400 }
      );
    }

    if (!establishedYear) {
      return NextResponse.json(
        { 
          error: "Established year is required",
          code: "MISSING_ESTABLISHED_YEAR" 
        },
        { status: 400 }
      );
    }

    // Validate establishedYear is a number
    if (isNaN(parseInt(establishedYear))) {
      return NextResponse.json(
        { 
          error: "Established year must be a valid number",
          code: "INVALID_ESTABLISHED_YEAR" 
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData: any = {
      name: name.trim(),
      location: location.trim(),
      establishedYear: parseInt(establishedYear)
    };

    // If university_id is provided, use it (for custom registration)
    if (university_id !== undefined) {
      const universityIdNum = parseInt(university_id);
      if (isNaN(universityIdNum)) {
        return NextResponse.json(
          { 
            error: "University ID must be a valid number",
            code: "INVALID_UNIVERSITY_ID" 
          },
          { status: 400 }
        );
      }

      // Check if university with this ID already exists
      const existing = await db.select()
        .from(university)
        .where(eq(university.universityId, universityIdNum))
        .limit(1);

      if (existing.length > 0) {
        return NextResponse.json(
          { 
            error: "University with this ID already exists",
            code: "UNIVERSITY_EXISTS" 
          },
          { status: 409 }
        );
      }

      sanitizedData.universityId = universityIdNum;
    }

    const newUniversity = await db.insert(university)
      .values(sanitizedData)
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

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        },
        { status: 400 }
      );
    }

    // Check if university exists
    const existing = await db.select()
      .from(university)
      .where(eq(university.universityId, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'University not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const updates: any = {};

    // Build updates object with only provided fields
    if (body.name !== undefined) {
      updates.name = body.name.trim();
    }

    if (body.location !== undefined) {
      updates.location = body.location.trim();
    }

    if (body.establishedYear !== undefined) {
      if (isNaN(parseInt(body.establishedYear))) {
        return NextResponse.json(
          { 
            error: "Established year must be a valid number",
            code: "INVALID_ESTABLISHED_YEAR" 
          },
          { status: 400 }
        );
      }
      updates.establishedYear = parseInt(body.establishedYear);
    }

    // Check if there are any updates to apply
    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { 
          error: "No valid fields to update",
          code: "NO_UPDATES" 
        },
        { status: 400 }
      );
    }

    const updated = await db.update(university)
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

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        },
        { status: 400 }
      );
    }

    // Check if university exists
    const existing = await db.select()
      .from(university)
      .where(eq(university.universityId, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'University not found' },
        { status: 404 }
      );
    }

    const deleted = await db.delete(university)
      .where(eq(university.universityId, parseInt(id)))
      .returning();

    return NextResponse.json(
      { 
        message: 'University deleted successfully',
        deleted: deleted[0]
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