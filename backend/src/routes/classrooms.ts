import { Router } from 'express';
import { db } from '../../db/index.js';
import { classroom, scheduledIn } from '../../db/schema.js';
import { eq, like, and, or, ne } from 'drizzle-orm';

const router = Router();

// GET /api/classrooms - Get all classrooms
router.get('/', async (req, res) => {
  try {
    const { building, search, universityId } = req.query as {
      building?: string;
      search?: string;
      universityId?: string;
    };
    
    const conditions: any[] = [];
    if (building) conditions.push(eq(classroom.building, building));
    if (search) {
      conditions.push(
        or(
          like(classroom.roomNumber, `%${search}%`),
          like(classroom.building, `%${search}%`)
        )
      );
    }
    if (universityId) {
      const uid = parseInt(universityId);
      if (!Number.isNaN(uid)) conditions.push(eq(classroom.universityId, uid));
    }
    
    const classrooms = conditions.length > 0
      ? await db.select().from(classroom).where(and(...conditions))
      : await db.select().from(classroom);
    
    res.json(classrooms);
  } catch (error) {
    console.error('Error fetching classrooms:', error);
    res.status(500).json({ error: 'Failed to fetch classrooms' });
  }
});

// GET /api/classrooms/:id - Get single classroom
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await db
      .select()
      .from(classroom)
      .where(eq(classroom.classroomId, id));
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Classroom not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error fetching classroom:', error);
    res.status(500).json({ error: 'Failed to fetch classroom' });
  }
});

// POST /api/classrooms - Create classroom
router.post('/', async (req, res) => {
  try {
    const { roomNumber, building, capacity, universityId } = req.body as {
      roomNumber?: string;
      building?: string;
      capacity?: number;
      universityId?: number;
    };
    
    if (!roomNumber || !building || !capacity || !universityId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const uid = Number(universityId);
    if (!Number.isInteger(uid)) {
      return res.status(400).json({ error: 'Invalid universityId' });
    }

    // Duplicate check: same (universityId, building, roomNumber)
    const dup = await db
      .select()
      .from(classroom)
      .where(and(eq(classroom.universityId, uid), eq(classroom.building, building), eq(classroom.roomNumber, roomNumber)));
    if (dup.length > 0) {
      return res.status(409).json({ error: 'Classroom already exists in this university' });
    }
    
    const insertResult = await db.insert(classroom).values({
      roomNumber,
      building,
      capacity,
      universityId: uid,
    });
    
    const insertedId = (insertResult as any).insertId ?? (insertResult as any)[0]?.insertId;
    const created = await db.select().from(classroom).where(eq(classroom.classroomId, insertedId));
    res.status(201).json(created[0]);
  } catch (error) {
    console.error('Error creating classroom:', error);
    res.status(500).json({ error: 'Failed to create classroom' });
  }
});

// PUT /api/classrooms/:id - Update classroom
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { roomNumber, building, capacity } = req.body as {
      roomNumber?: string;
      building?: string;
      capacity?: number;
    };

    const existing = await db.select().from(classroom).where(eq(classroom.classroomId, id));
    if (existing.length === 0) {
      return res.status(404).json({ error: 'Classroom not found' });
    }
    const current = existing[0] as any;
    const uid = current.universityId as number | null;

    // Duplicate check if building/roomNumber are provided/changed
    if (uid && roomNumber && building) {
      const dup = await db
        .select()
        .from(classroom)
        .where(
          and(
            eq(classroom.universityId, uid),
            eq(classroom.building, building),
            eq(classroom.roomNumber, roomNumber),
            ne(classroom.classroomId, id)
          )
        );
      if (dup.length > 0) {
        return res.status(409).json({ error: 'Classroom already exists in this university' });
      }
    }
    
    await db
      .update(classroom)
      .set({
        roomNumber,
        building,
        capacity,
      })
      .where(eq(classroom.classroomId, id));
    
    const updated = await db.select().from(classroom).where(eq(classroom.classroomId, id));
    if (updated.length === 0) {
      return res.status(404).json({ error: 'Classroom not found' });
    }
    
    res.json(updated[0]);
  } catch (error) {
    console.error('Error updating classroom:', error);
    res.status(500).json({ error: 'Failed to update classroom' });
  }
});

// DELETE /api/classrooms/:id - Delete classroom
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const existing = await db.select().from(classroom).where(eq(classroom.classroomId, id));
    if (existing.length === 0) {
      return res.status(404).json({ error: 'Classroom not found' });
    }
    
    // Delete schedules using this classroom first
    await db.delete(scheduledIn).where(eq(scheduledIn.classroomId, id));
    
    await db.delete(classroom).where(eq(classroom.classroomId, id));
    
    res.json({ message: 'Classroom deleted successfully', classroom: existing[0] });
  } catch (error) {
    console.error('Error deleting classroom:', error);
    res.status(500).json({ error: 'Failed to delete classroom' });
  }
});

export default router;
