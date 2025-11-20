import { Router } from 'express';
import { db } from '../../db/index.js';
import { course, department, subject, enrolledIn } from '../../db/schema.js';
import { eq, like, and } from 'drizzle-orm';

const router = Router();

// GET /api/courses - Get all courses
router.get('/', async (req, res) => {
  try {
    const { departmentId, search, universityId } = req.query;
    
    let query = db.select({
      courseId: course.courseId,
      courseName: course.courseName,
      credits: course.credits,
      semester: course.semester,
      departmentId: course.departmentId,
    })
    .from(course)
    .leftJoin(department, eq(course.departmentId, department.departmentId));
    
    const conditions = [];
    if (departmentId) {
      conditions.push(eq(course.departmentId, parseInt(departmentId as string)));
    }
    if (search && typeof search === 'string') {
      conditions.push(like(course.courseName, `%${search}%`));
    }
    
    if (universityId) {
      conditions.push(eq(department.universityId, parseInt(universityId as string)));
    }
    
    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }
    
    const courses = await query;
    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// GET /api/courses/:id - Get single course
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await db
      .select()
      .from(course)
      .where(eq(course.courseId, id));
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});

// POST /api/courses - Create course
router.post('/', async (req, res) => {
  try {
    const { courseName, credits, semester, departmentId } = req.body;
    
    if (!courseName || !credits || !semester || !departmentId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    // Duplicate: same course name within the same department
    const exists = await db
      .select({ courseId: course.courseId })
      .from(course)
      .where(and(eq(course.departmentId, parseInt(departmentId)), eq(course.courseName, courseName)))
      .limit(1);
    if (exists.length > 0) {
      return res.status(409).json({ error: 'Course with this name already exists in this department' });
    }
    
    // MySQL (mysql2) doesn't support RETURNING via Drizzle the same way Postgres does.
    // Insert and then select the created record by insertId.
    // derive universityId from department
    const deptRow = await db
      .select({ universityId: department.universityId })
      .from(department)
      .where(eq(department.departmentId, parseInt(departmentId)))
      .limit(1);
    const uniId = deptRow[0]?.universityId ?? null;

    const insertResult = await db.insert(course).values({
      courseName,
      credits,
      semester,
      departmentId,
      universityId: uniId,
    });

    // The mysql2 driver returns an object with `insertId` on success.
    const insertedId = (insertResult as any).insertId ?? (insertResult as any)[0]?.insertId;
    const created = await db.select().from(course).where(eq(course.courseId, insertedId));
    res.status(201).json(created[0]);
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ error: 'Failed to create course' });
  }
});

// PUT /api/courses/:id - Update course
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { courseName, credits, semester, departmentId } = req.body;
    let uniIdToSet: number | null | undefined = undefined;
    if (departmentId) {
      const deptRow = await db
        .select({ universityId: department.universityId })
        .from(department)
        .where(eq(department.departmentId, parseInt(departmentId)))
        .limit(1);
      uniIdToSet = deptRow[0]?.universityId ?? null;
    }
    
    // Perform update then fetch the updated row (MySQL/Drizzle doesn't support .returning)
    await db
      .update(course)
      .set({
        courseName,
        credits,
        semester,
        departmentId,
        ...(uniIdToSet !== undefined ? { universityId: uniIdToSet } : {}),
      })
      .where(eq(course.courseId, id));

    const updated = await db.select().from(course).where(eq(course.courseId, id));
    if (updated.length === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }
    
    res.json(updated[0]);
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ error: 'Failed to update course' });
  }
});

// DELETE /api/courses/:id - Delete course
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    // Fetch the course first so we can return it after deletion
    const existing = await db.select().from(course).where(eq(course.courseId, id));
    if (existing.length === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Delete subjects and enrollments first
    await db.delete(subject).where(eq(subject.courseId, id));
    await db.delete(enrolledIn).where(eq(enrolledIn.courseId, id));
    
    await db.delete(course).where(eq(course.courseId, id));

    res.json({ message: 'Course deleted successfully', course: existing[0] });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({ error: 'Failed to delete course' });
  }
});

export default router;
