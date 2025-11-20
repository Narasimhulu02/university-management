import { Router } from 'express';
import { db } from '../../db/index';
import { department, university, student, faculty, course } from '../../db/schema';
import { eq, like, and, or } from 'drizzle-orm';

const router = Router();

// GET /api/departments - Get all departments with optional filters
router.get('/', async (req, res) => {
  try {
    const { search, universityId } = req.query;
    
    let query = db.select({
      departmentId: department.departmentId,
      name: department.name,
      building: department.building,
      hodId: department.hodId,
      universityId: department.universityId,
      universityName: university.name,
    })
    .from(department)
    .leftJoin(university, eq(department.universityId, university.universityId));
    
    const conditions = [];
    if (search && typeof search === 'string') {
      conditions.push(
        or(
          like(department.name, `%${search}%`),
          like(department.building, `%${search}%`)
        )
      );
    }
    if (universityId) {
      conditions.push(eq(department.universityId, parseInt(universityId as string)));
    }
    
    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }
    
    const departments = await query;
    res.json(departments);
  } catch (error) {
    console.error('Error fetching departments:', error);
    res.status(500).json({ error: 'Failed to fetch departments' });
  }
});

// GET /api/departments/:id - Get single department
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const result = await db
      .select()
      .from(department)
      .where(eq(department.departmentId, id))
      .limit(1);
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Department not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error fetching department:', error);
    res.status(500).json({ error: 'Failed to fetch department' });
  }
});

// POST /api/departments - Create new department
router.post('/', async (req, res) => {
  try {
    const { name, building, universityId, hodId } = req.body;
    
    if (!name || !building || !universityId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    // Duplicate: same name within the same university
    const existing = await db
      .select()
      .from(department)
      .where(
        and(
          eq(department.universityId, parseInt(universityId)),
          eq(department.name, name)
        )
      )
      .limit(1);
    if (existing.length > 0) {
      return res.status(409).json({ error: 'Department with this name already exists in this university' });
    }
    
    const insertResult = await db
      .insert(department)
      .values({ name, building, universityId, hodId });
    
    console.log('Insert result:', insertResult);
    const insertedId = (insertResult as any).insertId ?? (insertResult as any)[0]?.insertId;
    console.log('Inserted ID:', insertedId);
    
    const result = await db
      .select()
      .from(department)
      .where(eq(department.departmentId, insertedId));
    
    console.log('Selected result:', result);
    res.status(201).json(result[0]);
  } catch (error) {
    console.error('Error creating department:', error);
    res.status(500).json({ error: 'Failed to create department' });
  }
});

// PUT /api/departments/:id - Update department
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, building, universityId, hodId } = req.body;
    
    if (name && universityId) {
      const dup = await db
        .select()
        .from(department)
        .where(
          and(
            eq(department.universityId, parseInt(universityId)),
            eq(department.name, name),
            // exclude self
            // MySQL: emulate <> with neq? Drizzle doesn't export neq; use and with not eq via raw filter is heavier. Safer: fetch and check id
          )
        )
        .limit(1);
      if (dup.length > 0 && dup[0].departmentId !== id) {
        return res.status(409).json({ error: 'Another department with this name exists in this university' });
      }
    }

    await db
      .update(department)
      .set({ name, building, universityId, hodId })
      .where(eq(department.departmentId, id));
    
    const result = await db
      .select()
      .from(department)
      .where(eq(department.departmentId, id));
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Department not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error updating department:', error);
    res.status(500).json({ error: 'Failed to update department' });
  }
});

// DELETE /api/departments/:id - Delete department
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const result = await db
      .select()
      .from(department)
      .where(eq(department.departmentId, id));
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Department not found' });
    }
    
    // Cascade delete: students, faculty, courses (courses will cascade subjects/enrollments via their own FKs)
    await db.delete(student).where(eq(student.departmentId, id));
    await db.delete(faculty).where(eq(faculty.departmentId, id));
    await db.delete(course).where(eq(course.departmentId, id));
    
    await db
      .delete(department)
      .where(eq(department.departmentId, id));
    
    res.json({ message: 'Department deleted successfully' });
  } catch (error) {
    console.error('Error deleting department:', error);
    res.status(500).json({ error: 'Failed to delete department' });
  }
});

export default router;
