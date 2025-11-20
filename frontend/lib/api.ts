// API configuration for frontend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const api = {
  // Base URL
  baseURL: API_BASE_URL,
  
  // Universities
  universities: {
    getAll: (search?: string) => 
      `${API_BASE_URL}/api/universities${search ? `?search=${encodeURIComponent(search)}` : ''}`,
    getById: (id: number) => `${API_BASE_URL}/api/universities/${id}`,
    create: () => `${API_BASE_URL}/api/universities`,
    update: (id: number) => `${API_BASE_URL}/api/universities/${id}`,
    delete: (id: number) => `${API_BASE_URL}/api/universities/${id}`,
  },
  
  // Departments
  departments: {
    getAll: (universityId?: number, search?: string) => {
      const params = new URLSearchParams();
      if (universityId) params.set('universityId', universityId.toString());
      if (search) params.set('search', search);
      return `${API_BASE_URL}/api/departments${params.toString() ? `?${params}` : ''}`;
    },
    getById: (id: number) => `${API_BASE_URL}/api/departments/${id}`,
    create: () => `${API_BASE_URL}/api/departments`,
    update: (id: number) => `${API_BASE_URL}/api/departments/${id}`,
    delete: (id: number) => `${API_BASE_URL}/api/departments/${id}`,
  },
  
  // Students
  students: {
    getAll: (departmentId?: number, search?: string, universityId?: number) => {
      const params = new URLSearchParams();
      if (departmentId) params.set('departmentId', departmentId.toString());
      if (search) params.set('search', search);
      if (universityId) params.set('universityId', universityId.toString());
      return `${API_BASE_URL}/api/students${params.toString() ? `?${params}` : ''}`;
    },
    getById: (id: number) => `${API_BASE_URL}/api/students/${id}`,
    create: () => `${API_BASE_URL}/api/students`,
    update: (id: number) => `${API_BASE_URL}/api/students/${id}`,
    delete: (id: number) => `${API_BASE_URL}/api/students/${id}`,
  },
  
  // Courses
  courses: {
    getAll: (departmentId?: number, search?: string, universityId?: number) => {
      const params = new URLSearchParams();
      if (departmentId) params.set('departmentId', departmentId.toString());
      if (search) params.set('search', search);
      if (universityId) params.set('universityId', universityId.toString());
      return `${API_BASE_URL}/api/courses${params.toString() ? `?${params}` : ''}`;
    },
    getById: (id: number) => `${API_BASE_URL}/api/courses/${id}`,
    create: () => `${API_BASE_URL}/api/courses`,
    update: (id: number) => `${API_BASE_URL}/api/courses/${id}`,
    delete: (id: number) => `${API_BASE_URL}/api/courses/${id}`,
  },
  
  // Faculty
  faculty: {
    getAll: (departmentId?: number, search?: string, universityId?: number) => {
      const params = new URLSearchParams();
      if (departmentId) params.set('departmentId', departmentId.toString());
      if (search) params.set('search', search);
      if (universityId) params.set('universityId', universityId.toString());
      return `${API_BASE_URL}/api/faculty${params.toString() ? `?${params}` : ''}`;
    },
    getById: (id: number) => `${API_BASE_URL}/api/faculty/${id}`,
    create: () => `${API_BASE_URL}/api/faculty`,
    update: (id: number) => `${API_BASE_URL}/api/faculty/${id}`,
    delete: (id: number) => `${API_BASE_URL}/api/faculty/${id}`,
  },

  // Subjects
  subjects: {
    getAll: (courseId?: number, facultyId?: number, search?: string, universityId?: number) => {
      const params = new URLSearchParams();
      if (courseId) params.set('courseId', courseId.toString());
      if (facultyId) params.set('facultyId', facultyId.toString());
      if (search) params.set('search', search);
      if (universityId) params.set('universityId', universityId.toString());
      return `${API_BASE_URL}/api/subjects${params.toString() ? `?${params}` : ''}`;
    },
    getById: (id: number) => `${API_BASE_URL}/api/subjects/${id}`,
    create: () => `${API_BASE_URL}/api/subjects`,
    update: (id: number) => `${API_BASE_URL}/api/subjects/${id}`,
    delete: (id: number) => `${API_BASE_URL}/api/subjects/${id}`,
  },

  // Classrooms
  classrooms: {
    getAll: (building?: string, search?: string, universityId?: number) => {
      const params = new URLSearchParams();
      if (building) params.set('building', building);
      if (search) params.set('search', search);
      if (universityId) params.set('universityId', universityId.toString());
      return `${API_BASE_URL}/api/classrooms${params.toString() ? `?${params}` : ''}`;
    },
    getById: (id: number) => `${API_BASE_URL}/api/classrooms/${id}`,
    create: () => `${API_BASE_URL}/api/classrooms`,
    update: (id: number) => `${API_BASE_URL}/api/classrooms/${id}`,
    delete: (id: number) => `${API_BASE_URL}/api/classrooms/${id}`,
  },

  // Enrollments
  enrollments: {
    getAll: (studentId?: number, courseId?: number, universityId?: number) => {
      const params = new URLSearchParams();
      if (studentId) params.set('studentId', studentId.toString());
      if (courseId) params.set('courseId', courseId.toString());
      if (universityId) params.set('universityId', universityId.toString());
      return `${API_BASE_URL}/api/enrollments${params.toString() ? `?${params}` : ''}`;
    },
    getById: (id: number) => `${API_BASE_URL}/api/enrollments/${id}`,
    create: () => `${API_BASE_URL}/api/enrollments`,
    update: (id: number) => `${API_BASE_URL}/api/enrollments/${id}`,
    delete: (id: number) => `${API_BASE_URL}/api/enrollments/${id}`,
  },

  // Schedules
  schedules: {
    getAll: (subjectId?: number, classroomId?: number, day?: string, universityId?: number) => {
      const params = new URLSearchParams();
      if (subjectId) params.set('subjectId', subjectId.toString());
      if (classroomId) params.set('classroomId', classroomId.toString());
      if (day) params.set('day', day);
      if (universityId) params.set('universityId', universityId.toString());
      return `${API_BASE_URL}/api/schedules${params.toString() ? `?${params}` : ''}`;
    },
    getById: (id: number) => `${API_BASE_URL}/api/schedules/${id}`,
    create: () => `${API_BASE_URL}/api/schedules`,
    update: (id: number) => `${API_BASE_URL}/api/schedules/${id}`,
    delete: (id: number) => `${API_BASE_URL}/api/schedules/${id}`,
  },
};

// Helper function for API calls
export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || `HTTP ${response.status}: ${response.statusText}`);
  }
  
  return response.json();
}
