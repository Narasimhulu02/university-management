"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { GraduationCap, Building2, Users, BookOpen, FlaskConical, DoorOpen, Calendar, UserCheck, LogOut, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { toast } from "sonner";
import { api, fetcher } from "@/lib/api";

const sections = [
  {
    title: "Students",
    description: "Manage student records",
    icon: UserCheck,
    href: "/students",
    color: "bg-orange-500",
  },
  {
    title: "Courses",
    description: "Manage course offerings",
    icon: BookOpen,
    href: "/courses",
    color: "bg-pink-500",
  },
  {
    title: "Classrooms",
    description: "Manage classroom facilities",
    icon: DoorOpen,
    href: "/classrooms",
    color: "bg-yellow-500",
  },
  {
    title: "Enrolled In",
    description: "Manage student enrollments",
    icon: UserCheck,
    href: "/enrollments",
    color: "bg-blue-500",
  },
  {
    title: "Scheduled In",
    description: "Manage class schedules",
    icon: Calendar,
    href: "/schedules",
    color: "bg-red-500",
  },
  {
    title: "Faculty",
    description: "Manage faculty members",
    icon: Users,
    href: "/faculty",
    color: "bg-green-500",
  },
  {
    title: "Departments",
    description: "Manage departments and HODs",
    icon: Building2,
    href: "/departments",
    color: "bg-purple-500",
  },
  {
    title: "Subjects",
    description: "Manage subjects and assignments",
    icon: FlaskConical,
    href: "/subjects",
    color: "bg-cyan-500",
  },
];

export default function AdminDashboard() {
  const params = useParams();
  const router = useRouter();
  const universityId = params.university_id as string;
  const [university, setUniversity] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUniversityId = localStorage.getItem("university_id");
    if (!storedUniversityId || storedUniversityId !== universityId) {
      toast.error("Unauthorized access. Please login again.");
      router.push("/");
      return;
    }

    fetchUniversity();
  }, [universityId, router]);

  const fetchUniversity = async () => {
    try {
      const data = await fetcher(api.universities.getById(parseInt(universityId)));
      setUniversity(data);
    } catch (error) {
      toast.error("Failed to load university data");
      router.push("/");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("university_id");
    toast.success("Logged out successfully");
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!university) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{university.name}</h1>
                <p className="text-muted-foreground mt-1">
                  {university.location} • Established {university.establishedYear}
                </p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>University Information</CardTitle>
            <CardDescription>
              Admin Dashboard for {university.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">University ID</p>
                <p className="text-lg font-semibold">{university.universityId}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Location</p>
                <p className="text-lg font-semibold">{university.location}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Established</p>
                <p className="text-lg font-semibold">{university.establishedYear}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-6">Manage Entities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={`/admin/${universityId}${section.href}`}
                className="group block p-6 bg-card border rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <div className={`${section.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {section.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}