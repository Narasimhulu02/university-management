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

type Subject = {
  subjectId: number;
  name: string;
  credits: number;
  courseId: number;
  facultyId: number;
};

type Course = {
  courseId: number;
  courseName: string;
};

type Faculty = {
  facultyId: number;
  name: string;
};

export default function SubjectsPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    credits: 3,
    courseId: "",
    facultyId: "",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const [subjRes, courseRes, facRes] = await Promise.all([
        fetch(`/api/subjects?limit=100&search=${search}`),
        fetch("/api/courses?limit=100"),
        fetch("/api/faculty?limit=100"),
      ]);

      const [subjData, courseData, facData] = await Promise.all([
        subjRes.json(),
        courseRes.json(),
        facRes.json(),
      ]);

      setSubjects(subjData);
      setCourses(courseData);
      setFaculty(facData);
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
        name: formData.name,
        credits: formData.credits,
        courseId: parseInt(formData.courseId),
        facultyId: parseInt(formData.facultyId),
      };

      const url = editingSubject
        ? `/api/subjects?id=${editingSubject.subjectId}`
        : "/api/subjects";
      const method = editingSubject ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to save subject");

      toast.success(editingSubject ? "Subject updated" : "Subject created");
      setIsDialogOpen(false);
      resetForm();
      fetchData();
    } catch (error) {
      toast.error("Failed to save subject");
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this subject?")) return;

    try {
      const response = await fetch(`/api/subjects?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete subject");

      toast.success("Subject deleted");
      fetchData();
    } catch (error) {
      toast.error("Failed to delete subject");
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      credits: 3,
      courseId: "",
      facultyId: "",
    });
    setEditingSubject(null);
  };

  const openEditDialog = (subject: Subject) => {
    setEditingSubject(subject);
    setFormData({
      name: subject.name,
      credits: subject.credits,
      courseId: subject.courseId.toString(),
      facultyId: subject.facultyId.toString(),
    });
    setIsDialogOpen(true);
  };

  const getCourseName = (id: number) => {
    return courses.find(c => c.courseId === id)?.courseName || "Unknown";
  };

  const getFacultyName = (id: number) => {
    return faculty.find(f => f.facultyId === id)?.name || "Unknown";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Subjects</h1>
          <p className="text-muted-foreground mt-2">
            Manage subjects and their assignments
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search subjects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="w-4 h-4 mr-2" />
                Add Subject
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingSubject ? "Edit Subject" : "Add New Subject"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Subject Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
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
                  <Label htmlFor="courseId">Course</Label>
                  <Select
                    value={formData.courseId}
                    onValueChange={(value) =>
                      setFormData({ ...formData, courseId: value })
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem
                          key={course.courseId}
                          value={course.courseId.toString()}
                        >
                          {course.courseName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="facultyId">Faculty</Label>
                  <Select
                    value={formData.facultyId}
                    onValueChange={(value) =>
                      setFormData({ ...formData, facultyId: value })
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select faculty" />
                    </SelectTrigger>
                    <SelectContent>
                      {faculty.map((fac) => (
                        <SelectItem
                          key={fac.facultyId}
                          value={fac.facultyId.toString()}
                        >
                          {fac.name}
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
                    {editingSubject ? "Update" : "Create"}
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
                <TableHead>Name</TableHead>
                <TableHead>Credits</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Faculty</TableHead>
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
              ) : subjects.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No subjects found
                  </TableCell>
                </TableRow>
              ) : (
                subjects.map((subject) => (
                  <TableRow key={subject.subjectId}>
                    <TableCell>{subject.subjectId}</TableCell>
                    <TableCell className="font-medium">{subject.name}</TableCell>
                    <TableCell>{subject.credits}</TableCell>
                    <TableCell>{getCourseName(subject.courseId)}</TableCell>
                    <TableCell>{getFacultyName(subject.facultyId)}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openEditDialog(subject)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(subject.subjectId)}
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
