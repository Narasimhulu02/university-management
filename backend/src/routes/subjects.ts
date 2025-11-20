import { Router } from 'express';
import { db } from '../../db/index.js';
import { subject, course, department, scheduledIn } from '../../db/schema.js';
import { eq, like, and } from 'drizzle-orm';

const router = Router();

// GET /api/subjects - Get all subjects
router.get('/', async (req, res) => {
  try {
    const { courseId, facultyId, search, universityId } = req.query;

    let query = db.select({
      subjectId: subject.subjectId,
      name: subject.name,
      credits: subject.credits,
      courseId: subject.courseId,
      facultyId: subject.facultyId,
    })
    .from(subject)
    .leftJoin(course, eq(subject.courseId, course.courseId))
    .leftJoin(department, eq(course.departmentId, department.departmentId));

    const conditions = [] as any[];
    if (courseId) conditions.push(eq(subject.courseId, parseInt(courseId as string)));
    if (facultyId) conditions.push(eq(subject.facultyId, parseInt(facultyId as string)));
    if (search && typeof search === 'string') conditions.push(like(subject.name, `%${search}%`));
    if (universityId) conditions.push(eq(department.universityId, parseInt(universityId as string)));

    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }

    const subjects = await query;
    
    res.json(subjects);
  } catch (error) {
    console.error('Error fetching subjects:', error);
    res.status(500).json({ error: 'Failed to fetch subjects' });
  }
});

// GET /api/subjects/:id - Get single subject
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await db
      .select()
      .from(subject)
      .where(eq(subject.subjectId, id));
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Subject not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error fetching subject:', error);
    res.status(500).json({ error: 'Failed to fetch subject' });
  }
});

// POST /api/subjects - Create subject
router.post('/', async (req, res) => {
  try {
    const { name, credits, courseId, facultyId } = req.body;
    
    if (!name || !credits || !courseId || !facultyId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    // Duplicate: same subject name within the same course
    const exists = await db
      .select({ subjectId: subject.subjectId })
      .from(subject)
      .where(and(eq(subject.courseId, parseInt(courseId)), eq(subject.name, name)))
      .limit(1);
    if (exists.length > 0) {
      return res.status(409).json({ error: 'Subject with this name already exists in this course' });
    }
    
    // derive universityId via course -> department
    const courseRow = await db
      .select({ universityId: department.universityId })
      .from(course)
      .leftJoin(department, eq(course.departmentId, department.departmentId))
      .where(eq(course.courseId, parseInt(courseId)))
      .limit(1);
    const uniId = courseRow[0]?.universityId ?? null;

    const insertResult = await db.insert(subject).values({
      name,
      credits,
      courseId,
      facultyId,
      universityId: uniId,
    });
    
    const insertedId = (insertResult as any).insertId ?? (insertResult as any)[0]?.insertId;
    const result = await db.select().from(subject).where(eq(subject.subjectId, insertedId));
    res.status(201).json(result[0]);
  } catch (error) {
    console.error('Error creating subject:', error);
    res.status(500).json({ error: 'Failed to create subject' });
  }
});

// PUT /api/subjects/:id - Update subject
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, credits, courseId, facultyId } = req.body;
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
      .update(subject)
      .set({
        name,
        credits,
        courseId,
        facultyId,
        ...(uniIdToSet !== undefined ? { universityId: uniIdToSet } : {}),
      })
      .where(eq(subject.subjectId, id));
    
    const result = await db.select().from(subject).where(eq(subject.subjectId, id));
    if (result.length === 0) {
      return res.status(404).json({ error: 'Subject not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error updating subject:', error);
    res.status(500).json({ error: 'Failed to update subject' });
  }
});

// DELETE /api/subjects/:id - Delete subject
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const result = await db.select().from(subject).where(eq(subject.subjectId, id));
    if (result.length === 0) {
      return res.status(404).json({ error: 'Subject not found' });
    }
    
    // Delete schedules first
    await db.delete(scheduledIn).where(eq(scheduledIn.subjectId, id));
    
    await db.delete(subject).where(eq(subject.subjectId, id));
    
    res.json({ message: 'Subject deleted successfully', subject: result[0] });
  } catch (error) {
    console.error('Error deleting subject:', error);
    res.status(500).json({ error: 'Failed to delete subject' });
  }
});

export default router;
