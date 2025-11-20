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
import { Label } from "../../../components/ui/label";
import { toast } from "sonner";

type Classroom = {
  classroomId: number;
  roomNumber: string;
  building: string;
  capacity: number;
};

export default function ClassroomsPage() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingClassroom, setEditingClassroom] = useState<Classroom | null>(null);
  const [formData, setFormData] = useState({
    roomNumber: "",
    building: "",
    capacity: 30,
  });

  const fetchClassrooms = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/classrooms?limit=100&search=${search}`);
      if (!response.ok) throw new Error("Failed to fetch classrooms");
      const data = await response.json();
      setClassrooms(data);
    } catch (error) {
      toast.error("Failed to load classrooms");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClassrooms();
  }, [search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingClassroom
        ? `/api/classrooms?id=${editingClassroom.classroomId}`
        : "/api/classrooms";
      const method = editingClassroom ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save classroom");

      toast.success(editingClassroom ? "Classroom updated" : "Classroom created");
      setIsDialogOpen(false);
      resetForm();
      fetchClassrooms();
    } catch (error) {
      toast.error("Failed to save classroom");
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this classroom?")) return;

    try {
      const response = await fetch(`/api/classrooms?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete classroom");

      toast.success("Classroom deleted");
      fetchClassrooms();
    } catch (error) {
      toast.error("Failed to delete classroom");
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({
      roomNumber: "",
      building: "",
      capacity: 30,
    });
    setEditingClassroom(null);
  };

  const openEditDialog = (classroom: Classroom) => {
    setEditingClassroom(classroom);
    setFormData({
      roomNumber: classroom.roomNumber,
      building: classroom.building,
      capacity: classroom.capacity,
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Classrooms</h1>
          <p className="text-muted-foreground mt-2">
            Manage classroom facilities and capacities
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search classrooms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="w-4 h-4 mr-2" />
                Add Classroom
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingClassroom ? "Edit Classroom" : "Add New Classroom"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="roomNumber">Room Number</Label>
                  <Input
                    id="roomNumber"
                    value={formData.roomNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, roomNumber: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="building">Building</Label>
                  <Input
                    id="building"
                    value={formData.building}
                    onChange={(e) =>
                      setFormData({ ...formData, building: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="capacity">Capacity</Label>
                  <Input
                    id="capacity"
                    type="number"
                    min="1"
                    value={formData.capacity}
                    onChange={(e) =>
                      setFormData({ ...formData, capacity: parseInt(e.target.value) })
                    }
                    required
                  />
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
                    {editingClassroom ? "Update" : "Create"}
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
                <TableHead>Room Number</TableHead>
                <TableHead>Building</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : classrooms.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No classrooms found
                  </TableCell>
                </TableRow>
              ) : (
                classrooms.map((classroom) => (
                  <TableRow key={classroom.classroomId}>
                    <TableCell>{classroom.classroomId}</TableCell>
                    <TableCell className="font-medium">{classroom.roomNumber}</TableCell>
                    <TableCell>{classroom.building}</TableCell>
                    <TableCell>{classroom.capacity}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openEditDialog(classroom)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(classroom.classroomId)}
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
