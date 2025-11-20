import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Import routes
import universitiesRouter from './routes/universities.js';
import departmentsRouter from './routes/departments.js';
import studentsRouter from './routes/students.js';
import coursesRouter from './routes/courses.js';
import facultyRouter from './routes/faculty.js';
import subjectsRouter from './routes/subjects.js';
import classroomsRouter from './routes/classrooms.js';
import enrollmentsRouter from './routes/enrollments.js';
import schedulesRouter from './routes/schedules.js';

// Load environment variables from root .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '../../.env') });

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Backend server is running',
    timestamp: new Date().toISOString()
  });
});

// Mount API routes
app.use('/api/universities', universitiesRouter);
app.use('/api/departments', departmentsRouter);
app.use('/api/students', studentsRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/faculty', facultyRouter);
app.use('/api/subjects', subjectsRouter);
app.use('/api/classrooms', classroomsRouter);
app.use('/api/enrollments', enrollmentsRouter);
app.use('/api/schedules', schedulesRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'University Management System API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      universities: '/api/universities',
      departments: '/api/departments',
      students: '/api/students',
      courses: '/api/courses',
      faculty: '/api/faculty',
      subjects: '/api/subjects',
      classrooms: '/api/classrooms',
      enrollments: '/api/enrollments',
      schedules: '/api/schedules',
    }
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
