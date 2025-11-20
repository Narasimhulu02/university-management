"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Checkbox } from "../../../components/ui/checkbox";
import { Shield, Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, isPending: sessionLoading } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  useEffect(() => {
    if (!sessionLoading && session?.user) {
      router.push("/dashboard");
    }
  }, [session, sessionLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
        callbackURL: "/dashboard",
      });

      if (error?.code) {
        toast.error("Invalid email or password. Please make sure you have already registered as an admin and try again.");
        setIsLoading(false);
        return;
      }

      // Check if user has admin role
      if (data?.user && (data.user as any).role !== "admin") {
        toast.error("Access denied. This login is for administrators only.");
        await authClient.signOut();
        localStorage.removeItem("bearer_token");
        setIsLoading(false);
        return;
      }

      toast.success("Welcome back, admin!");
      router.push("/dashboard");
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-950 dark:via-black dark:to-green-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>
            Enter your credentials to access the admin dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@university.edu"
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
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={formData.rememberMe}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, rememberMe: checked as boolean })
                }
                disabled={isLoading}
              />
              <Label htmlFor="remember" className="text-sm cursor-pointer">
                Remember me
              </Label>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <p className="text-muted-foreground">
              Don't have an admin account?{" "}
              <Link href="/register/admin" className="text-primary hover:underline font-medium">
                Register here
              </Link>
            </p>
          </div>
          <div className="mt-4 pt-4 border-t text-center text-sm">
            <p className="text-muted-foreground mb-2">Login as:</p>
            <div className="flex gap-2 justify-center">
              <Link href="/login/student">
                <Button variant="outline" size="sm">Student</Button>
              </Link>
              <Link href="/login/teacher">
                <Button variant="outline" size="sm">Teacher</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
