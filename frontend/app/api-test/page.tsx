'use client';

import { useEffect, useState } from 'react';
import { api, fetcher } from '@/lib/api';

export default function APITestPage() {
  const [data, setData] = useState<{
    universities?: any[];
    departments?: any[];
    students?: any[];
    courses?: any[];
    faculty?: any[];
    subjects?: any[];
    classrooms?: any[];
    enrollments?: any[];
    schedules?: any[];
  }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAllData() {
      try {
        setLoading(true);
        
        const [
          universities,
          departments,
          students,
          courses,
          faculty,
          subjects,
          classrooms,
          enrollments,
          schedules,
        ] = await Promise.all([
          fetcher<any[]>(api.universities.getAll()),
          fetcher<any[]>(api.departments.getAll()),
          fetcher<any[]>(api.students.getAll()),
          fetcher<any[]>(api.courses.getAll()),
          fetcher<any[]>(api.faculty.getAll()),
          fetcher<any[]>(api.subjects.getAll()),
          fetcher<any[]>(api.classrooms.getAll()),
          fetcher<any[]>(api.enrollments.getAll()),
          fetcher<any[]>(api.schedules.getAll()),
        ]);

        setData({
          universities,
          departments,
          students,
          courses,
          faculty,
          subjects,
          classrooms,
          enrollments,
          schedules,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    }

    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading all data from API...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-red-800 font-bold text-lg mb-2">Error</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          API Test - All Endpoints
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Universities */}
          <DataCard
            title="Universities"
            count={data.universities?.length || 0}
            data={data.universities}
            color="blue"
          />

          {/* Departments */}
          <DataCard
            title="Departments"
            count={data.departments?.length || 0}
            data={data.departments}
            color="green"
          />

          {/* Students */}
          <DataCard
            title="Students"
            count={data.students?.length || 0}
            data={data.students}
            color="purple"
          />

          {/* Courses */}
          <DataCard
            title="Courses"
            count={data.courses?.length || 0}
            data={data.courses}
            color="yellow"
          />

          {/* Faculty */}
          <DataCard
            title="Faculty"
            count={data.faculty?.length || 0}
            data={data.faculty}
            color="red"
          />

          {/* Subjects */}
          <DataCard
            title="Subjects"
            count={data.subjects?.length || 0}
            data={data.subjects}
            color="indigo"
          />

          {/* Classrooms */}
          <DataCard
            title="Classrooms"
            count={data.classrooms?.length || 0}
            data={data.classrooms}
            color="pink"
          />

          {/* Enrollments */}
          <DataCard
            title="Enrollments"
            count={data.enrollments?.length || 0}
            data={data.enrollments}
            color="teal"
          />

          {/* Schedules */}
          <DataCard
            title="Schedules"
            count={data.schedules?.length || 0}
            data={data.schedules}
            color="orange"
          />
        </div>
      </div>
    </div>
  );
}

function DataCard({ 
  title, 
  count, 
  data, 
  color 
}: { 
  title: string; 
  count: number; 
  data?: any[];
  color: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-900',
    green: 'bg-green-50 border-green-200 text-green-900',
    purple: 'bg-purple-50 border-purple-200 text-purple-900',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    red: 'bg-red-50 border-red-200 text-red-900',
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-900',
    pink: 'bg-pink-50 border-pink-200 text-pink-900',
    teal: 'bg-teal-50 border-teal-200 text-teal-900',
    orange: 'bg-orange-50 border-orange-200 text-orange-900',
  };

  return (
    <div className={`border rounded-lg p-6 ${colorClasses[color as keyof typeof colorClasses]}`}>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-4xl font-bold mb-4">{count}</p>
      
      {data && data.length > 0 && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm underline hover:no-underline"
          >
            {expanded ? 'Hide' : 'Show'} Data
          </button>
          
          {expanded && (
            <pre className="mt-4 text-xs overflow-auto max-h-96 bg-white bg-opacity-50 p-3 rounded">
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </>
      )}
    </div>
  );
}
