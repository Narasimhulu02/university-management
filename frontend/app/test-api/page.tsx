'use client';

import { useEffect, useState } from 'react';
import { api, fetcher } from '@/lib/api';

interface University {
  universityId: number;
  name: string;
  location: string;
  establishedYear: number;
}

export default function UniversitiesExample() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUniversities() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetcher<University[]>(api.universities.getAll());
        setUniversities(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load universities');
        console.error('Error loading universities:', err);
      } finally {
        setLoading(false);
      }
    }

    loadUniversities();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <h2 className="font-bold">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Universities</h1>
      
      {universities.length === 0 ? (
        <p className="text-gray-500">No universities found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {universities.map((university) => (
            <div
              key={university.universityId}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{university.name}</h2>
              <p className="text-gray-600">📍 {university.location}</p>
              <p className="text-gray-600">📅 Est. {university.establishedYear}</p>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-semibold mb-2">✅ Frontend Connected to Backend!</h3>
        <p className="text-sm text-gray-600">
          This page is fetching data from: <code className="bg-gray-100 px-2 py-1 rounded">{api.universities.getAll()}</code>
        </p>
      </div>
    </div>
  );
}
