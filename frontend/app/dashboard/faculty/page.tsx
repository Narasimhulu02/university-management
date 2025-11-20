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

type Faculty = {
  facultyId: number;
  name: string;
  designation: string;
  email: string;
  phone: string;
  departmentId: number;
};

type Department = {
  departmentId: number;
  name: string;
};

export default function FacultyPage() {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState<Faculty | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
    departmentId: "",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const [facRes, deptRes] = await Promise.all([
        fetch(`/api/faculty?limit=100&search=${search}`),
        fetch("/api/departments?limit=100"),
      ]);

      const [facData, deptData] = await Promise.all([
        facRes.json(),
        deptRes.json(),
      ]);

      setFaculty(facData);
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
        name: formData.name,
        designation: formData.designation,
        email: formData.email,
        phone: formData.phone,
        departmentId: parseInt(formData.departmentId),
      };

      const url = editingFaculty
        ? `/api/faculty?id=${editingFaculty.facultyId}`
        : "/api/faculty";
      const method = editingFaculty ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to save faculty");

      toast.success(editingFaculty ? "Faculty updated" : "Faculty created");
      setIsDialogOpen(false);
      resetForm();
      fetchData();
    } catch (error) {
      toast.error("Failed to save faculty");
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this faculty member?")) return;

    try {
      const response = await fetch(`/api/faculty?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete faculty");

      toast.success("Faculty deleted");
      fetchData();
    } catch (error) {
      toast.error("Failed to delete faculty");
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      designation: "",
      email: "",
      phone: "",
      departmentId: "",
    });
    setEditingFaculty(null);
  };

  const openEditDialog = (faculty: Faculty) => {
    setEditingFaculty(faculty);
    setFormData({
      name: faculty.name,
      designation: faculty.designation,
      email: faculty.email,
      phone: faculty.phone,
      departmentId: faculty.departmentId.toString(),
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
          <h1 className="text-3xl font-bold">Faculty</h1>
          <p className="text-muted-foreground mt-2">
            Manage faculty members and their assignments
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search faculty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="w-4 h-4 mr-2" />
                Add Faculty
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingFaculty ? "Edit Faculty" : "Add New Faculty"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
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
                  <Label htmlFor="designation">Designation</Label>
                  <Input
                    id="designation"
                    value={formData.designation}
                    onChange={(e) =>
                      setFormData({ ...formData, designation: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
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
                    {editingFaculty ? "Update" : "Create"}
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
                <TableHead>Designation</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Department</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : faculty.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    No faculty found
                  </TableCell>
                </TableRow>
              ) : (
                faculty.map((fac) => (
                  <TableRow key={fac.facultyId}>
                    <TableCell>{fac.facultyId}</TableCell>
                    <TableCell className="font-medium">{fac.name}</TableCell>
                    <TableCell>{fac.designation}</TableCell>
                    <TableCell>{fac.email}</TableCell>
                    <TableCell>{fac.phone}</TableCell>
                    <TableCell>{getDepartmentName(fac.departmentId)}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openEditDialog(fac)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(fac.facultyId)}
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
