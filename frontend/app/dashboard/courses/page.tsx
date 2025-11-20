"use client";

import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Label } from "../../../components/ui/label";
import { toast } from "sonner";

type Course = {
  courseId: number;
  courseName: string;
  credits: number;
  semester: number;
  departmentId: number;
};

type Department = {
  departmentId: number;
  name: string;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState({
    courseName: "",
    credits: 3,
    semester: 1,
    departmentId: "",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const [courseRes, deptRes] = await Promise.all([
        fetch(`/api/courses?limit=100&search=${search}`),
        fetch("/api/departments?limit=100"),
      ]);

      const [courseData, deptData] = await Promise.all([
        courseRes.json(),
        deptRes.json(),
      ]);

      setCourses(courseData);
      setDepartments(deptData);
    } catch (error) {
      toast.error("Failed to load data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        courseName: formData.courseName,
        credits: formData.credits,
        semester: formData.semester,
        departmentId: parseInt(formData.departmentId),
      };

      const url = editingCourse
        ? `/api/courses?id=${editingCourse.courseId}`
        : "/api/courses";
      const method = editingCourse ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to save course");

      toast.success(editingCourse ? "Course updated" : "Course created");
      setIsDialogOpen(false);
      resetForm();
      fetchData();
    } catch (error) {
      toast.error("Failed to save course");
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this course?")) return;

    try {
      const response = await fetch(`/api/courses?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete course");

      toast.success("Course deleted");
      fetchData();
    } catch (error) {
      toast.error("Failed to delete course");
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({
      courseName: "",
      credits: 3,
      semester: 1,
      departmentId: "",
    });
    setEditingCourse(null);
  };

  const openEditDialog = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      courseName: course.courseName,
      credits: course.credits,
      semester: course.semester,
      departmentId: course.departmentId.toString(),
    });
    setIsDialogOpen(true);
  };

  const getDepartmentName = (id: number) => {
    return departments.find(d => d.departmentId === id)?.name || "Unknown";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-muted-foreground mt-2">
            Manage course offerings and curriculum
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="w-4 h-4 mr-2" />
                Add Course
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingCourse ? "Edit Course" : "Add New Course"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="courseName">Course Name</Label>
                  <Input
                    id="courseName"
                    value={formData.courseName}
                    onChange={(e) =>
                      setFormData({ ...formData, courseName: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="credits">Credits</Label>
                  <Input
                    id="credits"
                    type="number"
                    min="1"
                    value={formData.credits}
                    onChange={(e) =>
                      setFormData({ ...formData, credits: parseInt(e.target.value) })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="semester">Semester</Label>
                  <Input
                    id="semester"
                    type="number"
                    min="1"
                    max="12"
                    value={formData.semester}
                    onChange={(e) =>
                      setFormData({ ...formData, semester: parseInt(e.target.value) })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="departmentId">Department</Label>
                  <Select
                    value={formData.departmentId}
                    onValueChange={(value) =>
                      setFormData({ ...formData, departmentId: value })
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem
                          key={dept.departmentId}
                          value={dept.departmentId.toString()}
                        >
                          {dept.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingCourse ? "Update" : "Create"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Course Name</TableHead>
                <TableHead>Credits</TableHead>
                <TableHead>Semester</TableHead>
                <TableHead>Department</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : courses.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No courses found
                  </TableCell>
                </TableRow>
              ) : (
                courses.map((course) => (
                  <TableRow key={course.courseId}>
                    <TableCell>{course.courseId}</TableCell>
                    <TableCell className="font-medium">{course.courseName}</TableCell>
                    <TableCell>{course.credits}</TableCell>
                    <TableCell>{course.semester}</TableCell>
                    <TableCell>{getDepartmentName(course.departmentId)}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openEditDialog(course)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(course.courseId)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
