"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GraduationCap, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { toast } from "sonner";
import { api, fetcher } from "@/lib/api";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [showRegisterOption, setShowRegisterOption] = useState(false);
  const [attemptedUniversityId, setAttemptedUniversityId] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Show success message if redirected after registration
  useEffect(() => {
    const registered = searchParams.get('registered');
    const universityId = searchParams.get('universityId');
    
    if (registered === 'true' && universityId) {
      toast.success(`University registered successfully! Your University ID is: ${universityId}`, {
        duration: 10000,
      });
      toast.info(`Login with: admin:${universityId}`, {
        duration: 10000,
      });
      // Pre-fill the username
      setFormData(prev => ({ ...prev, username: `admin:${universityId}` }));
    }
  }, [searchParams]);

  // Password validation function matching SQL triggers
  const validatePassword = (password: string): { valid: boolean; message: string } => {
    if (password.length < 8) {
      return { valid: false, message: "Password must be at least 8 characters long" };
    }
    if (!/[A-Z]/.test(password)) {
      return { valid: false, message: "Password must contain at least one uppercase letter" };
    }
    if (!/[a-z]/.test(password)) {
      return { valid: false, message: "Password must contain at least one lowercase letter" };
    }
    if (!/[0-9]/.test(password)) {
      return { valid: false, message: "Password must contain at least one number" };
    }
    return { valid: true, message: "" };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowRegisterOption(false);

    try {
      // Extract university_id from username (format: admin:<university_id>)
      const usernameMatch = formData.username.match(/^admin:(.+)$/);
      if (!usernameMatch) {
        toast.error("Username must be in format: admin:<university_id>");
        setIsLoading(false);
        return;
      }

      const universityId = usernameMatch[1];
      setAttemptedUniversityId(universityId);

      // Validate password meets security requirements
      const passwordValidation = validatePassword(formData.password);
      if (!passwordValidation.valid) {
        toast.error(passwordValidation.message);
        setIsLoading(false);
        return;
      }

      // Verify the university exists using ID parameter
      let university: any;
      try {
        university = await fetcher(api.universities.getById(parseInt(universityId)));
      } catch (error) {
        toast.error("University not found. Please register your university first.");
        setShowRegisterOption(true);
        setIsLoading(false);
        return;
      }

      // Store university_id in localStorage
      localStorage.setItem("university_id", universityId);
      
      toast.success(`Welcome, Admin of ${university.name}!`);
      router.push(`/admin/${universityId}`);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  const handleRegisterClick = () => {
    router.push(`/register/university?id=${attemptedUniversityId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-purple-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">University Management System</CardTitle>
          <CardDescription>
            Admin Login - Enter your credentials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="admin:<university_id>"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
                disabled={isLoading}
              />
              <p className="text-xs text-muted-foreground">
                Format: admin:&lt;university_id&gt; (e.g., admin:25)
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                disabled={isLoading}
                autoComplete="off"
              />
            </div>
            <div className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
              <p className="font-medium mb-1">🔒 Password Requirements:</p>
              <ul className="text-xs space-y-0.5 list-disc list-inside">
                <li>Minimum 8 characters</li>
                <li>At least 1 uppercase letter (A-Z)</li>
                <li>At least 1 lowercase letter (a-z)</li>
                <li>At least 1 number (0-9)</li>
              </ul>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Admin Login"
              )}
            </Button>
            
            {showRegisterOption && (
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-center text-muted-foreground mb-3">
                  University not found in the system
                </p>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full"
                  onClick={handleRegisterClick}
                >
                  Register New University
                </Button>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}