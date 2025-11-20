import { Router } from 'express';
import { db } from '../../db/index.js';
import { scheduledIn, subject, course, department } from '../../db/schema.js';
import { eq, and } from 'drizzle-orm';

const router = Router();

// GET /api/schedules - Get all schedules
router.get('/', async (req, res) => {
  try {
    const { subjectId, classroomId, day, universityId } = req.query;

    let query = db.select({
      id: scheduledIn.id,
      subjectId: scheduledIn.subjectId,
      classroomId: scheduledIn.classroomId,
      day: scheduledIn.day,
      timeSlot: scheduledIn.timeSlot,
    })
    .from(scheduledIn)
    .leftJoin(subject, eq(scheduledIn.subjectId, subject.subjectId))
    .leftJoin(course, eq(subject.courseId, course.courseId))
    .leftJoin(department, eq(course.departmentId, department.departmentId));

    const conditions = [] as any[];
    if (subjectId) conditions.push(eq(scheduledIn.subjectId, parseInt(subjectId as string)));
    if (classroomId) conditions.push(eq(scheduledIn.classroomId, parseInt(classroomId as string)));
    if (day && typeof day === 'string') conditions.push(eq(scheduledIn.day, day));
    if (universityId) conditions.push(eq(department.universityId, parseInt(universityId as string)));

    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }

    const schedules = await query;
    
    res.json(schedules);
  } catch (error) {
    console.error('Error fetching schedules:', error);
    res.status(500).json({ error: 'Failed to fetch schedules' });
  }
});

// GET /api/schedules/:id - Get single schedule
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await db
      .select()
      .from(scheduledIn)
      .where(eq(scheduledIn.id, id));
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error fetching schedule:', error);
    res.status(500).json({ error: 'Failed to fetch schedule' });
  }
});

// POST /api/schedules - Create schedule
router.post('/', async (req, res) => {
  try {
    const { subjectId, classroomId, day, timeSlot } = req.body;
    
    if (!subjectId || !classroomId || !day || !timeSlot) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    // Duplicate: same subject on same day & timeSlot within same university (through joins)
    // First, select department.universityId for the given subject
    const subjectRow = await db
      .select({
        universityId: department.universityId,
      })
      .from(subject)
      .leftJoin(course, eq(subject.courseId, course.courseId))
      .leftJoin(department, eq(course.departmentId, department.departmentId))
      .where(eq(subject.subjectId, parseInt(subjectId)))
      .limit(1);
    const uniId = subjectRow[0]?.universityId;
    if (uniId) {
      const dup = await db
        .select({ id: scheduledIn.id })
        .from(scheduledIn)
        .leftJoin(subject, eq(scheduledIn.subjectId, subject.subjectId))
        .leftJoin(course, eq(subject.courseId, course.courseId))
        .leftJoin(department, eq(course.departmentId, department.departmentId))
        .where(
          and(
            eq(scheduledIn.day, day),
            eq(scheduledIn.timeSlot, timeSlot),
            eq(department.universityId, uniId)
          )
        )
        .limit(1);
      if (dup.length > 0) {
        return res.status(409).json({ error: 'Schedule already exists at this day/time in this university' });
      }
    }
    
    const insertResult = await db.insert(scheduledIn).values({
      subjectId,
      classroomId,
      day,
      timeSlot,
      universityId: uniId || null,
    });
    
    const insertedId = (insertResult as any).insertId ?? (insertResult as any)[0]?.insertId;
    const result = await db
      .select()
      .from(scheduledIn)
      .where(eq(scheduledIn.id, insertedId));
    
    res.status(201).json(result[0]);
  } catch (error) {
    console.error('Error creating schedule:', error);
    res.status(500).json({ error: 'Failed to create schedule' });
  }
});

// PUT /api/schedules/:id - Update schedule
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { subjectId, classroomId, day, timeSlot } = req.body;
    let uniIdToSet: number | null | undefined = undefined;
    if (subjectId) {
      const subjectRow2 = await db
        .select({ universityId: department.universityId })
        .from(subject)
        .leftJoin(course, eq(subject.courseId, course.courseId))
        .leftJoin(department, eq(course.departmentId, department.departmentId))
        .where(eq(subject.subjectId, parseInt(subjectId)))
        .limit(1);
      uniIdToSet = subjectRow2[0]?.universityId ?? null;
    }
    
    await db
      .update(scheduledIn)
      .set({
        subjectId,
        classroomId,
        day,
        timeSlot,
        ...(uniIdToSet !== undefined ? { universityId: uniIdToSet } : {}),
      })
      .where(eq(scheduledIn.id, id));
    
    const result = await db
      .select()
      .from(scheduledIn)
      .where(eq(scheduledIn.id, id));
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error updating schedule:', error);
    res.status(500).json({ error: 'Failed to update schedule' });
  }
});

// DELETE /api/schedules/:id - Delete schedule
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const result = await db
      .select()
      .from(scheduledIn)
      .where(eq(scheduledIn.id, id));
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    
    await db
      .delete(scheduledIn)
      .where(eq(scheduledIn.id, id));
    
    res.json({ message: 'Schedule deleted successfully', schedule: result[0] });
  } catch (error) {
    console.error('Error deleting schedule:', error);
    res.status(500).json({ error: 'Failed to delete schedule' });
  }
});

export default router;
