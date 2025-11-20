"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Plus, Search, Trash2, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
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

export default function StudentsPage() {
  const params = useParams();
  const router = useRouter();
  const universityId = params.university_id as string;
  
  const [students, setStudents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; studentId: string | null }>({
    open: false,
    studentId: null,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    address: "",
    departmentId: "",
  });

  useEffect(() => {
    const storedUniversityId = localStorage.getItem("university_id");
    if (!storedUniversityId || storedUniversityId !== universityId) {
      toast.error("Unauthorized. Please login again.");
      router.push("/");
      return;
    }
    fetchStudents();
  }, [universityId, router]);

  const fetchStudents = async () => {
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.students.getAll(undefined, undefined, parseInt(universityId)));
      setStudents(data || []);
    } catch (error) {
      toast.error("Failed to load students");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchKey.trim()) {
      fetchStudents();
      return;
    }
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.students.getAll(undefined, searchKey, parseInt(universityId)));
      setStudents(data || []);
      toast.success(`Found ${data?.length || 0} student(s)`);
    } catch (error) {
      toast.error("Search failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetcher(api.students.create(), {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          dateOfBirth: formData.dateOfBirth,
          gender: formData.gender,
          phone: formData.phone,
          address: formData.address,
          departmentId: parseInt(formData.departmentId),
        }),
      });
      
        toast.success("Student added successfully");
        setShowAddForm(false);
        setFormData({ name: "", email: "", dateOfBirth: "", gender: "", phone: "", address: "", departmentId: "" });
        fetchStudents();
    } catch (error) {
      toast.error("Failed to add student");
    }
  };

  const handleDelete = async (studentId: string) => {
    setDeleteDialog({ open: true, studentId });
  };

  const confirmDelete = async () => {
    if (!deleteDialog.studentId) return;
    
    try {
      await fetcher(api.students.delete(parseInt(deleteDialog.studentId)), {
        method: "DELETE",
      });
      
        toast.success("Student deleted successfully");
        fetchStudents();
    } catch (error) {
      toast.error("Failed to delete student");
    } finally {
      setDeleteDialog({ open: false, studentId: null });
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
            <CardTitle>Student Management</CardTitle>
            <CardDescription>Add, search, and delete student records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Search by Student ID..."
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
                Add Student
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
                    <Label>Email</Label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Date of Birth</Label>
                    <Input
                      required
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Gender</Label>
                    <Select
                      required
                      value={formData.gender}
                      onValueChange={(value) => setFormData({ ...formData, gender: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Phone Number</Label>
                    <Input
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Address</Label>
                    <Input
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
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
                  <Button type="submit">Add Student</Button>
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
            {students.map((student) => (
              <Card key={student.studentId}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                      <div>
                        <p className="text-sm text-muted-foreground">Student ID</p>
                        <p className="font-semibold">{student.studentId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-semibold">{student.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold">{student.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Date of Birth</p>
                        <p className="font-semibold">{student.dateOfBirth}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Gender</p>
                        <p className="font-semibold">{student.gender}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-semibold">{student.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="font-semibold">{student.address}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Department ID</p>
                        <p className="font-semibold">{student.departmentId}</p>
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(student.studentId)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {students.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No students found</p>
            )}
          </div>
        )}
      </div>

      <Dialog open={deleteDialog.open} onOpenChange={(open) => setDeleteDialog({ open, studentId: null })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Student</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete student ID {deleteDialog.studentId}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialog({ open: false, studentId: null })}>
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