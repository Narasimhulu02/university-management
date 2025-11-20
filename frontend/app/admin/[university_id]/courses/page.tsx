"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Plus, Search, Trash2, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../../components/ui/dialog";
import { toast } from "sonner";
import { api, fetcher } from "@/lib/api";

export default function CoursesPage() {
  const params = useParams();
  const router = useRouter();
  const universityId = params.university_id as string;
  
  const [courses, setCourses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; courseId: number | null }>({
    open: false,
    courseId: null,
  });
  const [formData, setFormData] = useState({
    courseName: "",
    credits: "",
    semester: "",
    departmentId: "",
  });

  useEffect(() => {
    const storedUniversityId = localStorage.getItem("university_id");
    if (!storedUniversityId || storedUniversityId !== universityId) {
      toast.error("Unauthorized. Please login again.");
      router.push("/");
      return;
    }
    fetchCourses();
  }, [universityId, router]);

  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.courses.getAll(undefined, undefined, parseInt(universityId)));
      setCourses(data || []);
    } catch (error) {
      toast.error("Failed to load courses");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchKey.trim()) {
      fetchCourses();
      return;
    }
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.courses.getAll(undefined, searchKey, parseInt(universityId)));
      setCourses(data || []);
      toast.success(`Found ${data?.length || 0} course(s)`);
    } catch (error) {
      toast.error("Search failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetcher(api.courses.create(), {
        method: "POST",
        body: JSON.stringify({ 
          courseName: formData.courseName,
          credits: parseInt(formData.credits),
          semester: parseInt(formData.semester),
          departmentId: parseInt(formData.departmentId),
        }),
      });
      
      toast.success("Course added successfully");
      setShowAddForm(false);
      setFormData({ courseName: "", credits: "", semester: "", departmentId: "" });
      fetchCourses();
    } catch (error) {
      toast.error("Failed to add course");
    }
  };

  const handleDelete = async (courseId: number) => {
    setDeleteDialog({ open: true, courseId });
  };

  const confirmDelete = async () => {
    if (!deleteDialog.courseId) return;
    
    try {
      await fetcher(api.courses.delete(deleteDialog.courseId), {
        method: "DELETE",
      });
      
      toast.success("Course deleted successfully");
      fetchCourses();
    } catch (error) {
      toast.error("Failed to delete course");
    } finally {
      setDeleteDialog({ open: false, courseId: null });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href={`/admin/${universityId}`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Course Management</CardTitle>
            <CardDescription>Add, search, and delete course records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Search by Course ID..."
                  value={searchKey}
                  onChange={(e) => setSearchKey(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <Button onClick={handleSearch}>
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
              <Button onClick={() => setShowAddForm(!showAddForm)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Course
              </Button>
            </div>

            {showAddForm && (
              <form onSubmit={handleAdd} className="border rounded-lg p-4 mb-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Course Name</Label>
                    <Input
                      required
                      value={formData.courseName}
                      onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Credits</Label>
                    <Input
                      required
                      type="number"
                      value={formData.credits}
                      onChange={(e) => setFormData({ ...formData, credits: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Semester</Label>
                    <Input
                      required
                      type="number"
                      value={formData.semester}
                      onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Department ID</Label>
                    <Input
                      required
                      type="number"
                      value={formData.departmentId}
                      onChange={(e) => setFormData({ ...formData, departmentId: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Add Course</Button>
                  <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        ) : (
          <div className="grid gap-4">
            {courses.map((course) => (
              <Card key={course.courseId}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                      <div>
                        <p className="text-sm text-muted-foreground">Course ID</p>
                        <p className="font-semibold">{course.courseId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Course Name</p>
                        <p className="font-semibold">{course.courseName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Credits</p>
                        <p className="font-semibold">{course.credits}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Semester</p>
                        <p className="font-semibold">{course.semester}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Department ID</p>
                        <p className="font-semibold">{course.departmentId}</p>
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(course.courseId)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {courses.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No courses found</p>
            )}
          </div>
        )}
      </div>

      <Dialog open={deleteDialog.open} onOpenChange={(open) => setDeleteDialog({ open, courseId: null })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Course</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete course ID {deleteDialog.courseId}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialog({ open: false, courseId: null })}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}