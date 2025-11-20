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

export default function FacultyPage() {
  const params = useParams();
  const router = useRouter();
  const universityId = params.university_id as string;
  
  const [faculty, setFaculty] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; facultyId: number | null }>({
    open: false,
    facultyId: null,
  });
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
    departmentId: "",
  });

  useEffect(() => {
    const storedUniversityId = localStorage.getItem("university_id");
    if (!storedUniversityId || storedUniversityId !== universityId) {
      toast.error("Unauthorized. Please login again.");
      router.push("/");
      return;
    }
    fetchFaculty();
  }, [universityId, router]);

  const fetchFaculty = async () => {
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.faculty.getAll(undefined, undefined, parseInt(universityId)));
      setFaculty(data || []);
    } catch (error) {
      toast.error("Failed to load faculty");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchKey.trim()) {
      fetchFaculty();
      return;
    }
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.faculty.getAll(undefined, searchKey, parseInt(universityId)));
      setFaculty(data || []);
      toast.success(`Found ${data?.length || 0} faculty member(s)`);
    } catch (error) {
      toast.error("Search failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetcher(api.faculty.create(), {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          designation: formData.designation,
          email: formData.email,
          phone: formData.phone,
          departmentId: parseInt(formData.departmentId),
        }),
      });
      
      toast.success("Faculty member added successfully");
      setShowAddForm(false);
      setFormData({ name: "", designation: "", email: "", phone: "", departmentId: "" });
      fetchFaculty();
    } catch (error) {
      toast.error("Failed to add faculty member");
    }
  };

  const handleDelete = async (facultyId: number) => {
    setDeleteDialog({ open: true, facultyId });
  };

  const confirmDelete = async () => {
    if (!deleteDialog.facultyId) return;
    
    try {
      await fetcher(api.faculty.delete(deleteDialog.facultyId), {
        method: "DELETE",
      });
      
      toast.success("Faculty member deleted successfully");
      fetchFaculty();
    } catch (error) {
      toast.error("Failed to delete faculty member");
    } finally {
      setDeleteDialog({ open: false, facultyId: null });
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
            <CardTitle>Faculty Management</CardTitle>
            <CardDescription>Add, search, and delete faculty records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Search by Faculty ID..."
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
                Add Faculty
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
                    <Label>Designation</Label>
                    <Input
                      required
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
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
                    <Label>Phone Number</Label>
                    <Input
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                  <Button type="submit">Add Faculty</Button>
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
            {faculty.map((member) => (
              <Card key={member.facultyId}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
                      <div>
                        <p className="text-sm text-muted-foreground">Faculty ID</p>
                        <p className="font-semibold">{member.facultyId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-semibold">{member.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Designation</p>
                        <p className="font-semibold">{member.designation}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold">{member.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-semibold">{member.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Department ID</p>
                        <p className="font-semibold">{member.departmentId}</p>
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(member.facultyId)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {faculty.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No faculty members found</p>
            )}
          </div>
        )}
      </div>

      <Dialog open={deleteDialog.open} onOpenChange={(open) => setDeleteDialog({ open, facultyId: null })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Faculty Member</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete faculty member ID {deleteDialog.facultyId}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialog({ open: false, facultyId: null })}>
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