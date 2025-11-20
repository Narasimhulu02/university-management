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

export default function ClassroomsPage() {
  const params = useParams();
  const router = useRouter();
  const universityId = params.university_id as string;
  const [classrooms, setClassrooms] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; classroomId: number | null }>({
    open: false,
    classroomId: null,
  });
  const [formData, setFormData] = useState({
    roomNumber: "",
    building: "",
    capacity: ""
  });

  useEffect(() => {
    const storedUniversityId = localStorage.getItem("university_id");
    if (!storedUniversityId || storedUniversityId !== universityId) {
      toast.error("Unauthorized access. Please login again.");
      router.push("/");
      return;
    }

    fetchClassrooms();
  }, [universityId, router]);

  const fetchClassrooms = async () => {
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.classrooms.getAll(undefined, undefined, Number(universityId)));
      setClassrooms(data);
    } catch (error) {
      toast.error("Error loading classrooms");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchKey.trim()) {
      fetchClassrooms();
      return;
    }
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.classrooms.getAll(undefined, searchKey, Number(universityId)));
      setClassrooms(data);
      toast.success(`Found ${data.length || 0} classroom(s)`);
    } catch (error) {
      toast.error("Search failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetcher(api.classrooms.create(), {
        method: "POST",
        body: JSON.stringify({ 
          roomNumber: formData.roomNumber,
          building: formData.building,
          capacity: parseInt(formData.capacity),
          universityId: Number(universityId),
        }),
      });
      
      toast.success("Classroom added successfully");
      setShowAddForm(false);
      setFormData({ roomNumber: "", building: "", capacity: "" });
      fetchClassrooms();
    } catch (error) {
      toast.error("Failed to add classroom");
    }
  };

  const handleDelete = async (classroomId: number) => {
    setDeleteDialog({ open: true, classroomId });
  };

  const confirmDelete = async () => {
    if (!deleteDialog.classroomId) return;
    
    try {
      await fetcher(api.classrooms.delete(deleteDialog.classroomId), {
        method: "DELETE",
      });
      
      toast.success("Classroom deleted successfully");
      fetchClassrooms();
    } catch (error) {
      toast.error("Failed to delete classroom");
    } finally {
      setDeleteDialog({ open: false, classroomId: null });
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
            <CardTitle>Classroom Management</CardTitle>
            <CardDescription>Add, search, and delete classroom records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Search by room number or building..."
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
                Add Classroom
              </Button>
            </div>

            {showAddForm && (
              <form onSubmit={handleAdd} className="border rounded-lg p-4 mb-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Building</Label>
                    <Input
                      required
                      value={formData.building}
                      onChange={(e) => setFormData({ ...formData, building: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Room Number</Label>
                    <Input
                      required
                      value={formData.roomNumber}
                      onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Capacity</Label>
                    <Input
                      required
                      type="number"
                      value={formData.capacity}
                      onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Add Classroom</Button>
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
            {classrooms.map((classroom) => (
              <Card key={classroom.classroomId}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                      <div>
                        <p className="text-sm text-muted-foreground">Classroom ID</p>
                        <p className="font-semibold">{classroom.classroomId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Building</p>
                        <p className="font-semibold">{classroom.building}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Room Number</p>
                        <p className="font-semibold">{classroom.roomNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Capacity</p>
                        <p className="font-semibold">{classroom.capacity}</p>
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(classroom.classroomId)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {classrooms.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No classrooms found</p>
            )}
          </div>
        )}
      </div>

      <Dialog open={deleteDialog.open} onOpenChange={(open) => setDeleteDialog({ open, classroomId: null })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Classroom</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete classroom ID {deleteDialog.classroomId}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialog({ open: false, classroomId: null })}>
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