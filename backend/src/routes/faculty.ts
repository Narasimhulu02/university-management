import { Router } from 'express';
import { db } from '../../db/index.js';
import { faculty, department, subject } from '../../db/schema.js';
import { eq, like, and, or } from 'drizzle-orm';

const router = Router();

// GET /api/faculty - Get all faculty
router.get('/', async (req, res) => {
  try {
    const { departmentId, search, universityId } = req.query;
    
    let query = db.select({
      facultyId: faculty.facultyId,
      name: faculty.name,
      email: faculty.email,
      designation: faculty.designation,
      phone: faculty.phone,
      departmentId: faculty.departmentId,
    })
    .from(faculty)
    .leftJoin(department, eq(faculty.departmentId, department.departmentId));
    
    const conditions = [];
    if (departmentId) {
      conditions.push(eq(faculty.departmentId, parseInt(departmentId as string)));
    }
    if (search && typeof search === 'string') {
      conditions.push(
        or(
          like(faculty.name, `%${search}%`),
          like(faculty.email, `%${search}%`)
        )
      );
    }
    
    if (universityId) {
      conditions.push(eq(department.universityId, parseInt(universityId as string)));
    }
    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }
    
    const facultyList = await query;
    res.json(facultyList);
  } catch (error) {
    console.error('Error fetching faculty:', error);
    res.status(500).json({ error: 'Failed to fetch faculty' });
  }
});

// GET /api/faculty/:id - Get single faculty member
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await db
      .select()
      .from(faculty)
      .where(eq(faculty.facultyId, id));
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Faculty member not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error fetching faculty:', error);
    res.status(500).json({ error: 'Failed to fetch faculty' });
  }
});

// POST /api/faculty - Create faculty member
router.post('/', async (req, res) => {
  try {
    const { name, email, designation, phone, departmentId } = req.body;
    
    if (!name || !email || !designation || !phone || !departmentId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Duplicate: faculty email within same university (via department)
    const dept = await db
      .select({ universityId: department.universityId })
      .from(department)
      .where(eq(department.departmentId, parseInt(departmentId)))
      .limit(1);
    const uniId = dept[0]?.universityId;
    if (uniId) {
      const dup = await db
        .select({ facultyId: faculty.facultyId })
        .from(faculty)
        .leftJoin(department, eq(faculty.departmentId, department.departmentId))
        .where(and(eq(faculty.email, email), eq(department.universityId, uniId)))
        .limit(1);
      if (dup.length > 0) {
        return res.status(409).json({ error: 'Faculty email already exists in this university' });
      }
    }
    
    const insertResult = await db.insert(faculty).values({
      name,
      email,
      designation,
      phone,
      departmentId,
      universityId: uniId || null,
    });
    
    const insertedId = (insertResult as any).insertId ?? (insertResult as any)[0]?.insertId;
    const result = await db.select().from(faculty).where(eq(faculty.facultyId, insertedId));
    res.status(201).json(result[0]);
  } catch (error) {
    console.error('Error creating faculty:', error);
    res.status(500).json({ error: 'Failed to create faculty member' });
  }
});

// PUT /api/faculty/:id - Update faculty member
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, email, designation, phone, departmentId } = req.body;
    let uniIdToSet: number | null | undefined = undefined;
    if (departmentId) {
      const deptRow = await db
        .select({ universityId: department.universityId })
        .from(department)
        .where(eq(department.departmentId, parseInt(departmentId)))
        .limit(1);
      uniIdToSet = deptRow[0]?.universityId ?? null;
    }
    
    await db
      .update(faculty)
      .set({
        name,
        email,
        designation,
        phone,
        departmentId,
        ...(uniIdToSet !== undefined ? { universityId: uniIdToSet } : {}),
      })
      .where(eq(faculty.facultyId, id));
    
    const result = await db.select().from(faculty).where(eq(faculty.facultyId, id));
    if (result.length === 0) {
      return res.status(404).json({ error: 'Faculty member not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error updating faculty:', error);
    res.status(500).json({ error: 'Failed to update faculty member' });
  }
});

// DELETE /api/faculty/:id - Delete faculty member
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const result = await db.select().from(faculty).where(eq(faculty.facultyId, id));
    if (result.length === 0) {
      return res.status(404).json({ error: 'Faculty member not found' });
    }
    
    // Delete subjects taught by this faculty first
    await db.delete(subject).where(eq(subject.facultyId, id));
    
    await db.delete(faculty).where(eq(faculty.facultyId, id));
    
    res.json({ message: 'Faculty member deleted successfully', faculty: result[0] });
  } catch (error) {
    console.error('Error deleting faculty:', error);
    res.status(500).json({ error: 'Failed to delete faculty member' });
  }
});

export default router;
