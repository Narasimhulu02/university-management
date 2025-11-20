// Frontend auth client - all auth logic is now on the backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function getCurrentUser() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/session`, {
      credentials: 'include',
    });
    
    if (!response.ok) {
      return null;
    }
    
    const session = await response.json();
    return session?.user || null;
  } catch (error) {
    console.error('Error fetching current user:', error);
    return null;
  }
}

export async function login(email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login failed');
  }
  
  return response.json();
}

export async function logout() {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });
  
  return response.ok;
}