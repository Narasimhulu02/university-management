import { Router } from 'express';
import { db } from '../../db/index.js';
import { enrolledIn, course, department } from '../../db/schema.js';
import { eq, and } from 'drizzle-orm';

const router = Router();

// GET /api/enrollments - Get all enrollments
router.get('/', async (req, res) => {
  try {
    const { studentId, courseId, universityId } = req.query;

    let query = db.select({
      id: enrolledIn.id,
      studentId: enrolledIn.studentId,
      courseId: enrolledIn.courseId,
      grade: enrolledIn.grade,
    })
    .from(enrolledIn)
    .leftJoin(course, eq(enrolledIn.courseId, course.courseId))
    .leftJoin(department, eq(course.departmentId, department.departmentId));

    const conditions = [] as any[];
    if (studentId) conditions.push(eq(enrolledIn.studentId, parseInt(studentId as string)));
    if (courseId) conditions.push(eq(enrolledIn.courseId, parseInt(courseId as string)));
    if (universityId) conditions.push(eq(department.universityId, parseInt(universityId as string)));

    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }

    const enrollments = await query;
    
    res.json(enrollments);
  } catch (error) {
    console.error('Error fetching enrollments:', error);
    res.status(500).json({ error: 'Failed to fetch enrollments' });
  }
});

// GET /api/enrollments/:id - Get single enrollment
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await db
      .select()
      .from(enrolledIn)
      .where(eq(enrolledIn.id, id));
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error fetching enrollment:', error);
    res.status(500).json({ error: 'Failed to fetch enrollment' });
  }
});

// POST /api/enrollments - Create enrollment
router.post('/', async (req, res) => {
  try {
    const { studentId, courseId, grade } = req.body;
    
    if (!studentId || !courseId) {
      return res.status(400).json({ error: 'Missing required fields: studentId and courseId' });
    }
    // Duplicate: a student can be enrolled once per course
    const exists = await db
      .select({ id: enrolledIn.id })
      .from(enrolledIn)
      .where(and(eq(enrolledIn.studentId, parseInt(studentId)), eq(enrolledIn.courseId, parseInt(courseId))))
      .limit(1);
    if (exists.length > 0) {
      return res.status(409).json({ error: 'Student is already enrolled in this course' });
    }
    
    // derive universityId from course -> department
    const courseRow = await db
      .select({ universityId: department.universityId })
      .from(course)
      .leftJoin(department, eq(course.departmentId, department.departmentId))
      .where(eq(course.courseId, parseInt(courseId)))
      .limit(1);
    const uniId = courseRow[0]?.universityId ?? null;

    const insertResult = await db.insert(enrolledIn).values({
      studentId,
      courseId,
      grade: grade || null,
      universityId: uniId,
    });
    
    const insertedId = (insertResult as any).insertId ?? (insertResult as any)[0]?.insertId;
    const result = await db
      .select()
      .from(enrolledIn)
      .where(eq(enrolledIn.id, insertedId));
    
    res.status(201).json(result[0]);
  } catch (error) {
    console.error('Error creating enrollment:', error);
    res.status(500).json({ error: 'Failed to create enrollment' });
  }
});

// PUT /api/enrollments/:id - Update enrollment (mainly for updating grade)
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { studentId, courseId, grade } = req.body;
    let uniIdToSet: number | null | undefined = undefined;
    if (courseId) {
      const courseRow = await db
        .select({ universityId: department.universityId })
        .from(course)
        .leftJoin(department, eq(course.departmentId, department.departmentId))
        .where(eq(course.courseId, parseInt(courseId)))
        .limit(1);
      uniIdToSet = courseRow[0]?.universityId ?? null;
    }
    
    await db
      .update(enrolledIn)
      .set({
        studentId,
        courseId,
        grade,
        ...(uniIdToSet !== undefined ? { universityId: uniIdToSet } : {}),
      })
      .where(eq(enrolledIn.id, id));
    
    const result = await db
      .select()
      .from(enrolledIn)
      .where(eq(enrolledIn.id, id));
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error updating enrollment:', error);
    res.status(500).json({ error: 'Failed to update enrollment' });
  }
});

// DELETE /api/enrollments/:id - Delete enrollment
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const result = await db
      .select()
      .from(enrolledIn)
      .where(eq(enrolledIn.id, id));
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }
    
    await db
      .delete(enrolledIn)
      .where(eq(enrolledIn.id, id));
    
    res.json({ message: 'Enrollment deleted successfully', enrollment: result[0] });
  } catch (error) {
    console.error('Error deleting enrollment:', error);
    res.status(500).json({ error: 'Failed to delete enrollment' });
  }
});

export default router;
