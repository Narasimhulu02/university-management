import { Router } from 'express';
import { db } from '../../db/index';
import { university } from '../../db/schema';
import { eq, like, or } from 'drizzle-orm';

const router = Router();

// GET /api/universities - Get all universities with optional search
router.get('/', async (req, res) => {
  try {
    const { search } = req.query;
    
    let universities;
    if (search && typeof search === 'string') {
      universities = await db
        .select()
        .from(university)
        .where(
          or(
            like(university.name, `%${search}%`),
            like(university.location, `%${search}%`)
          )
        );
    } else {
      universities = await db.select().from(university);
    }
    
    res.json(universities);
  } catch (error) {
    console.error('Error fetching universities:', error);
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
});

// GET /api/universities/:id - Get single university by ID
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const result = await db
      .select()
      .from(university)
      .where(eq(university.universityId, id))
      .limit(1);
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'University not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error fetching university:', error);
    res.status(500).json({ error: 'Failed to fetch university' });
  }
});

// POST /api/universities - Create new university
router.post('/', async (req, res) => {
  try {
    const { name, location, establishedYear } = req.body;
    
    if (!name || !location || !establishedYear) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const insertResult = await db
      .insert(university)
      .values({ name, location, establishedYear });
    
    const insertedId = (insertResult as any).insertId ?? (insertResult as any)[0]?.insertId;
    const result = await db
      .select()
      .from(university)
      .where(eq(university.universityId, insertedId));
    
    res.status(201).json(result[0]);
  } catch (error) {
    console.error('Error creating university:', error);
    res.status(500).json({ error: 'Failed to create university' });
  }
});

// PUT /api/universities/:id - Update university
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, location, establishedYear } = req.body;
    
    await db
      .update(university)
      .set({ name, location, establishedYear })
      .where(eq(university.universityId, id));
    
    const result = await db
      .select()
      .from(university)
      .where(eq(university.universityId, id));
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'University not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error updating university:', error);
    res.status(500).json({ error: 'Failed to update university' });
  }
});

// DELETE /api/universities/:id - Delete university
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const result = await db
      .select()
      .from(university)
      .where(eq(university.universityId, id));
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'University not found' });
    }
    
    await db
      .delete(university)
      .where(eq(university.universityId, id));
    
    res.json({ message: 'University deleted successfully' });
  } catch (error) {
    console.error('Error deleting university:', error);
    res.status(500).json({ error: 'Failed to delete university' });
  }
});

export default router;
