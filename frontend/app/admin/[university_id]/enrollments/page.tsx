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

export default function EnrollmentsPage() {
  const params = useParams();
  const router = useRouter();
  const universityId = params.university_id as string;
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; enrollmentId: number | null }>({
    open: false,
    enrollmentId: null,
  });
  const [formData, setFormData] = useState({
    studentId: "",
    courseId: "",
    grade: ""
  });

  useEffect(() => {
    const storedUniversityId = localStorage.getItem("university_id");
    if (!storedUniversityId || storedUniversityId !== universityId) {
      toast.error("Unauthorized access. Please login again.");
      router.push("/");
      return;
    }

    fetchEnrollments();
  }, [universityId, router]);

  const fetchEnrollments = async () => {
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.enrollments.getAll(undefined, undefined, parseInt(universityId)));
      setEnrollments(data);
    } catch (error) {
      toast.error("Error loading enrollments");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchKey.trim()) {
      fetchEnrollments();
      return;
    }
    try {
      setIsLoading(true);
      const studentId = parseInt(searchKey);
      const data = await fetcher<any[]>(api.enrollments.getAll(isNaN(studentId) ? undefined : studentId, undefined, parseInt(universityId)));
      setEnrollments(data);
      toast.success(`Found ${data.length || 0} enrollment(s)`);
    } catch (error) {
      toast.error("Search failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetcher(api.enrollments.create(), {
        method: "POST",
        body: JSON.stringify({
          studentId: parseInt(formData.studentId),
          courseId: parseInt(formData.courseId),
          grade: formData.grade || undefined
        }),
      });
      
      toast.success("Enrollment added successfully");
      setShowAddForm(false);
      setFormData({ studentId: "", courseId: "", grade: "" });
      fetchEnrollments();
    } catch (error) {
      toast.error("Failed to add enrollment");
    }
  };

  const handleDelete = async (id: number) => {
    setDeleteDialog({ open: true, enrollmentId: id });
  };

  const confirmDelete = async () => {
    if (!deleteDialog.enrollmentId) return;
    
    try {
      await fetcher(api.enrollments.delete(deleteDialog.enrollmentId), {
        method: "DELETE",
      });
      
      toast.success("Enrollment deleted successfully");
      fetchEnrollments();
    } catch (error) {
      toast.error("Failed to delete enrollment");
    } finally {
      setDeleteDialog({ open: false, enrollmentId: null });
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
            <CardTitle>Enrollment Management (Enrolled_In)</CardTitle>
            <CardDescription>Add, search, and delete enrollment records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Search by Student ID or Course ID..."
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
                Add Enrollment
              </Button>
            </div>

            {showAddForm && (
              <form onSubmit={handleAdd} className="border rounded-lg p-4 mb-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Student ID</Label>
                    <Input
                      required
                      type="number"
                      value={formData.studentId}
                      onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Course ID</Label>
                    <Input
                      required
                      type="number"
                      value={formData.courseId}
                      onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Grade (optional)</Label>
                    <Input
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Add Enrollment</Button>
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
            {enrollments.map((enrollment) => (
              <Card key={enrollment.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
                      <div>
                        <p className="text-sm text-muted-foreground">Student ID</p>
                        <p className="font-semibold">{enrollment.studentId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Course ID</p>
                        <p className="font-semibold">{enrollment.courseId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Grade</p>
                        <p className="font-semibold">{enrollment.grade || "N/A"}</p>
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(enrollment.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {enrollments.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No enrollments found</p>
            )}
          </div>
        )}
      </div>

      <Dialog open={deleteDialog.open} onOpenChange={(open) => setDeleteDialog({ open, enrollmentId: null })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Enrollment</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this enrollment? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialog({ open: false, enrollmentId: null })}>
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