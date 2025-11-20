"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { BookOpen, Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function TeacherRegisterPage() {
  const router = useRouter();
  const { data: session, isPending: sessionLoading } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (!sessionLoading && session?.user) {
      router.push("/dashboard");
    }
  }, [session, sessionLoading, router]);

  // Password validation function
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
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Validate password meets security requirements
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.valid) {
      toast.error(passwordValidation.message);
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await authClient.signUp.email({
        email: formData.email,
        name: formData.name,
        password: formData.password,
      });

      if (error?.code) {
        const errorMap: Record<string, string> = {
          USER_ALREADY_EXISTS: "Email already registered",
        };
        toast.error(errorMap[error.code] || "Registration failed");
        setIsLoading(false);
        return;
      }

      // Update user role to teacher
      if (data?.user?.id) {
        const roleResponse = await fetch("/api/user/update-role", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: data.user.id,
            role: "teacher",
          }),
        });

        if (!roleResponse.ok) {
          console.error("Failed to update user role");
        }
      }

      toast.success("Account created successfully! Please login.");
      router.push("/login/teacher?registered=true");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  if (sessionLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-950 dark:via-black dark:to-purple-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Teacher Registration</CardTitle>
          <CardDescription>
            Create your teacher account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Dr. Jane Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="teacher@university.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                disabled={isLoading}
                autoComplete="off"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
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
                  Creating account...
                </>
              ) : (
                "Create Teacher Account"
              )}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login/teacher" className="text-primary hover:underline font-medium">
                Login here
              </Link>
            </p>
          </div>
          <div className="mt-4 pt-4 border-t text-center text-sm">
            <p className="text-muted-foreground mb-2">Register as:</p>
            <div className="flex gap-2 justify-center">
              <Link href="/register/student">
                <Button variant="outline" size="sm">Student</Button>
              </Link>
              <Link href="/register/admin">
                <Button variant="outline" size="sm">Admin</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}