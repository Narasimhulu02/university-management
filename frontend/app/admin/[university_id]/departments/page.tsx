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

export default function DepartmentsPage() {
  const params = useParams();
  const router = useRouter();
  const universityId = params.university_id as string;
  
  const [departments, setDepartments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; departmentId: number | null }>({
    open: false,
    departmentId: null,
  });
  const [formData, setFormData] = useState({
    name: "",
    building: "",
    hodId: "",
  });

  useEffect(() => {
    const storedUniversityId = localStorage.getItem("university_id");
    if (!storedUniversityId || storedUniversityId !== universityId) {
      toast.error("Unauthorized. Please login again.");
      router.push("/");
      return;
    }
    fetchDepartments();
  }, [universityId, router]);

  const fetchDepartments = async () => {
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.departments.getAll(parseInt(universityId)));
      setDepartments(data || []);
    } catch (error) {
      toast.error("Failed to load departments");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchKey.trim()) {
      fetchDepartments();
      return;
    }
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.departments.getAll(parseInt(universityId), searchKey));
      setDepartments(data || []);
      toast.success(`Found ${data?.length || 0} department(s)`);
    } catch (error) {
      toast.error("Search failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetcher(api.departments.create(), {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          building: formData.building,
          hodId: formData.hodId ? parseInt(formData.hodId) : undefined,
          universityId: parseInt(universityId),
        }),
      });
      
      toast.success("Department added successfully");
      setShowAddForm(false);
      setFormData({ name: "", building: "", hodId: "" });
      fetchDepartments();
    } catch (error) {
      toast.error("Failed to add department");
    }
  };

  const handleDelete = async (departmentId: number) => {
    setDeleteDialog({ open: true, departmentId });
  };

  const confirmDelete = async () => {
    if (!deleteDialog.departmentId) return;
    
    try {
      await fetcher(api.departments.delete(deleteDialog.departmentId), {
        method: "DELETE",
      });
      
      toast.success("Department deleted successfully");
      fetchDepartments();
    } catch (error) {
      toast.error("Failed to delete department");
    } finally {
      setDeleteDialog({ open: false, departmentId: null });
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
            <CardTitle>Department Management</CardTitle>
            <CardDescription>Add, search, and delete department records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Search by Department ID..."
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
                Add Department
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
                    <Label>Building</Label>
                    <Input
                      required
                      value={formData.building}
                      onChange={(e) => setFormData({ ...formData, building: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>HOD ID (optional)</Label>
                    <Input
                      type="number"
                      value={formData.hodId}
                      onChange={(e) => setFormData({ ...formData, hodId: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Add Department</Button>
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
            {departments.map((department) => (
              <Card key={department.departmentId}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                      <div>
                        <p className="text-sm text-muted-foreground">Department ID</p>
                        <p className="font-semibold">{department.departmentId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-semibold">{department.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Building</p>
                        <p className="font-semibold">{department.building}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">HOD ID</p>
                        <p className="font-semibold">{department.hodId || "N/A"}</p>
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(department.departmentId)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {departments.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No departments found</p>
            )}
          </div>
        )}
      </div>

      <Dialog open={deleteDialog.open} onOpenChange={(open) => setDeleteDialog({ open, departmentId: null })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Department</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete department ID {deleteDialog.departmentId}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialog({ open: false, departmentId: null })}>
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