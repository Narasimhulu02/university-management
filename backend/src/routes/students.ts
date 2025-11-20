import { Router } from 'express';
import { db } from '../../db/index';
import { student, department, enrolledIn } from '../../db/schema';
import { eq, like, and, or } from 'drizzle-orm';

const router = Router();

// GET /api/students - Get all students with optional filters
router.get('/', async (req, res) => {
  try {
    const { search, departmentId, universityId } = req.query;
    
    let query = db.select({
      studentId: student.studentId,
      name: student.name,
      email: student.email,
      dateOfBirth: student.dateOfBirth,
      gender: student.gender,
      address: student.address,
      phone: student.phone,
      departmentId: student.departmentId,
      departmentName: department.name,
    })
    .from(student)
    .leftJoin(department, eq(student.departmentId, department.departmentId));
    
    const conditions = [];
    if (search && typeof search === 'string') {
      conditions.push(
        or(
          like(student.name, `%${search}%`),
          like(student.email, `%${search}%`)
        )
      );
    }
    if (departmentId) {
      conditions.push(eq(student.departmentId, parseInt(departmentId as string)));
    }
    if (universityId) {
      conditions.push(eq(department.universityId, parseInt(universityId as string)));
    }
    
    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }
    
    const students = await query;
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

// GET /api/students/:id - Get single student
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const result = await db
      .select()
      .from(student)
      .where(eq(student.studentId, id))
      .limit(1);
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({ error: 'Failed to fetch student' });
  }
});

// POST /api/students - Create new student
router.post('/', async (req, res) => {5
  try {
    const { name, email, dateOfBirth, gender, address, phone, departmentId } = req.body;
    
    if (!name || !email || !dateOfBirth || !gender || !address || !phone || !departmentId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Duplicate: email within same university (via department)
    const dept = await db
      .select({ universityId: department.universityId })
      .from(department)
      .where(eq(department.departmentId, parseInt(departmentId)))
      .limit(1);
    const uniId = dept[0]?.universityId;
    if (uniId) {
      const dup = await db
        .select({ studentId: student.studentId })
        .from(student)
        .leftJoin(department, eq(student.departmentId, department.departmentId))
        .where(and(eq(student.email, email), eq(department.universityId, uniId)))
        .limit(1);
      if (dup.length > 0) {
        return res.status(409).json({ error: 'Student email already exists in this university' });
      }
    }
    
    const insertResult = await db
      .insert(student)
      .values({ name, email, dateOfBirth, gender, address, phone, departmentId, universityId: uniId || null });
    
    const insertedId = (insertResult as any).insertId ?? (insertResult as any)[0]?.insertId;
    const result = await db.select().from(student).where(eq(student.studentId, insertedId));
    res.status(201).json(result[0]);
  } catch (error: any) {
    console.error('Error creating student:', error);
    
    // Check for trigger validation errors
    if (error.sqlMessage) {
      // MySQL trigger error
      return res.status(400).json({ error: error.sqlMessage });
    }
    
    res.status(500).json({ error: 'Failed to create student' });
  }
});

// PUT /api/students/:id - Update student
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, email, dateOfBirth, gender, address, phone, departmentId } = req.body;
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
      .update(student)
      .set({ name, email, dateOfBirth, gender, address, phone, departmentId, ...(uniIdToSet !== undefined ? { universityId: uniIdToSet } : {}) })
      .where(eq(student.studentId, id));
    
    const result = await db.select().from(student).where(eq(student.studentId, id));
    if (result.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    res.json(result[0]);
  } catch (error: any) {
    console.error('Error updating student:', error);
    
    // Check for trigger validation errors
    if (error.sqlMessage) {
      return res.status(400).json({ error: error.sqlMessage });
    }
    
    res.status(500).json({ error: 'Failed to update student' });
  }
});

// DELETE /api/students/:id - Delete student
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const result = await db.select().from(student).where(eq(student.studentId, id));
    if (result.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    // Delete child enrollments first to avoid FK constraint violation
    await db.delete(enrolledIn).where(eq(enrolledIn.studentId, id));
    
    await db.delete(student).where(eq(student.studentId, id));
    
    res.json({ message: 'Student deleted successfully', student: result[0] });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({ error: 'Failed to delete student' });
  }
});

export default router;
