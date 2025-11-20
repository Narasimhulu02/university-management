import Link from "next/link";
import { GraduationCap, Building2, Users, BookOpen, FlaskConical, DoorOpen, Calendar, UserCheck } from "lucide-react";

const sections = [
  {
    title: "Universities",
    description: "Manage university information",
    icon: GraduationCap,
    href: "/dashboard/universities",
    color: "bg-blue-500",
  },
  {
    title: "Departments",
    description: "Manage departments and HODs",
    icon: Building2,
    href: "/dashboard/departments",
    color: "bg-purple-500",
  },
  {
    title: "Faculty",
    description: "Manage faculty members",
    icon: Users,
    href: "/dashboard/faculty",
    color: "bg-green-500",
  },
  {
    title: "Students",
    description: "Manage student records",
    icon: UserCheck,
    href: "/dashboard/students",
    color: "bg-orange-500",
  },
  {
    title: "Courses",
    description: "Manage course offerings",
    icon: BookOpen,
    href: "/dashboard/courses",
    color: "bg-pink-500",
  },
  {
    title: "Subjects",
    description: "Manage subjects and assignments",
    icon: FlaskConical,
    href: "/dashboard/subjects",
    color: "bg-cyan-500",
  },
  {
    title: "Classrooms",
    description: "Manage classroom facilities",
    icon: DoorOpen,
    href: "/dashboard/classrooms",
    color: "bg-yellow-500",
  },
  {
    title: "Schedules",
    description: "Manage class schedules",
    icon: Calendar,
    href: "/dashboard/schedules",
    color: "bg-red-500",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">University Management System</h1>
          <p className="text-muted-foreground mt-2">
            Manage all aspects of your university operations
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
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
