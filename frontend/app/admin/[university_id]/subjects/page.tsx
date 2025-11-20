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

export default function SubjectsPage() {
  const params = useParams();
  const router = useRouter();
  const universityId = params.university_id as string;
  const [subjects, setSubjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; subjectId: number | null }>({
    open: false,
    subjectId: null,
  });
  const [formData, setFormData] = useState({
    name: "",
    credits: "",
    courseId: "",
    facultyId: ""
  });

  useEffect(() => {
    const storedUniversityId = localStorage.getItem("university_id");
    if (!storedUniversityId || storedUniversityId !== universityId) {
      toast.error("Unauthorized access. Please login again.");
      router.push("/");
      return;
    }

    fetchSubjects();
  }, [universityId, router]);

  const fetchSubjects = async () => {
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.subjects.getAll(undefined, undefined, undefined, parseInt(universityId)));
      setSubjects(data);
    } catch (error) {
      toast.error("Error loading subjects");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchKey.trim()) {
      fetchSubjects();
      return;
    }
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.subjects.getAll(undefined, undefined, searchKey, parseInt(universityId)));
      setSubjects(data);
      toast.success(`Found ${data.length || 0} subject(s)`);
    } catch (error) {
      toast.error("Search failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetcher(api.subjects.create(), {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          credits: parseInt(formData.credits),
          courseId: parseInt(formData.courseId),
          facultyId: parseInt(formData.facultyId),
        }),
      });
      
      toast.success("Subject added successfully");
      setShowAddForm(false);
      setFormData({ name: "", credits: "", courseId: "", facultyId: "" });
      fetchSubjects();
    } catch (error) {
      toast.error("Failed to add subject");
    }
  };

  const handleDelete = async (subjectId: number) => {
    setDeleteDialog({ open: true, subjectId });
  };

  const confirmDelete = async () => {
    if (!deleteDialog.subjectId) return;
    
    try {
      await fetcher(api.subjects.delete(deleteDialog.subjectId), {
        method: "DELETE",
      });
      
      toast.success("Subject deleted successfully");
      fetchSubjects();
    } catch (error) {
      toast.error("Failed to delete subject");
    } finally {
      setDeleteDialog({ open: false, subjectId: null });
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
            <CardTitle>Subject Management</CardTitle>
            <CardDescription>Add, search, and delete subject records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Search by subject name..."
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
                Add Subject
              </Button>
            </div>

            {showAddForm && (
              <form onSubmit={handleAdd} className="border rounded-lg p-4 mb-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Name</Label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    <Label>Course ID</Label>
                    <Input
                      required
                      type="number"
                      value={formData.courseId}
                      onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Faculty ID</Label>
                    <Input
                      required
                      type="number"
                      value={formData.facultyId}
                      onChange={(e) => setFormData({ ...formData, facultyId: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Add Subject</Button>
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
            {subjects.map((subject) => (
              <Card key={subject.subjectId}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 flex-1">
                      <div>
                        <p className="text-sm text-muted-foreground">Subject ID</p>
                        <p className="font-semibold">{subject.subjectId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-semibold">{subject.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Credits</p>
                        <p className="font-semibold">{subject.credits}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Course ID</p>
                        <p className="font-semibold">{subject.courseId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Faculty ID</p>
                        <p className="font-semibold">{subject.facultyId}</p>
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(subject.subjectId)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {subjects.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No subjects found</p>
            )}
          </div>
        )}
      </div>

      <Dialog open={deleteDialog.open} onOpenChange={(open) => setDeleteDialog({ open, subjectId: null })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Subject</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete subject ID {deleteDialog.subjectId}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialog({ open: false, subjectId: null })}>
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