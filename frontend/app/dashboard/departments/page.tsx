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

type Department = {
  departmentId: number;
  name: string;
  building: string;
  hodId: number | null;
  universityId: number;
};

type University = {
  universityId: number;
  name: string;
};

type Faculty = {
  facultyId: number;
  name: string;
};

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [universities, setUniversities] = useState<University[]>([]);
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState<Department | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    building: "",
    hodId: "",
    universityId: "",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const [deptRes, univRes, facRes] = await Promise.all([
        fetch(`/api/departments?limit=100&search=${search}`),
        fetch("/api/universities?limit=100"),
        fetch("/api/faculty?limit=100"),
      ]);

      const [deptData, univData, facData] = await Promise.all([
        deptRes.json(),
        univRes.json(),
        facRes.json(),
      ]);

      setDepartments(deptData);
      setUniversities(univData);
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
        building: formData.building,
        universityId: parseInt(formData.universityId),
        hodId: formData.hodId ? parseInt(formData.hodId) : null,
      };

      const url = editingDepartment
        ? `/api/departments?id=${editingDepartment.departmentId}`
        : "/api/departments";
      const method = editingDepartment ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to save department");

      toast.success(editingDepartment ? "Department updated" : "Department created");
      setIsDialogOpen(false);
      resetForm();
      fetchData();
    } catch (error) {
      toast.error("Failed to save department");
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this department?")) return;

    try {
      const response = await fetch(`/api/departments?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete department");

      toast.success("Department deleted");
      fetchData();
    } catch (error) {
      toast.error("Failed to delete department");
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      building: "",
      hodId: "",
      universityId: "",
    });
    setEditingDepartment(null);
  };

  const openEditDialog = (department: Department) => {
    setEditingDepartment(department);
    setFormData({
      name: department.name,
      building: department.building,
      hodId: department.hodId?.toString() || "",
      universityId: department.universityId.toString(),
    });
    setIsDialogOpen(true);
  };

  const getUniversityName = (id: number) => {
    return universities.find(u => u.universityId === id)?.name || "Unknown";
  };

  const getFacultyName = (id: number | null) => {
    if (!id) return "Not Assigned";
    return faculty.find(f => f.facultyId === id)?.name || "Unknown";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Departments</h1>
          <p className="text-muted-foreground mt-2">
            Manage departments and assign HODs
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search departments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="w-4 h-4 mr-2" />
                Add Department
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingDepartment ? "Edit Department" : "Add New Department"}
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
                  <Label htmlFor="universityId">University</Label>
                  <Select
                    value={formData.universityId}
                    onValueChange={(value) =>
                      setFormData({ ...formData, universityId: value })
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select university" />
                    </SelectTrigger>
                    <SelectContent>
                      {universities.map((uni) => (
                        <SelectItem
                          key={uni.universityId}
                          value={uni.universityId.toString()}
                        >
                          {uni.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="hodId">Head of Department (Optional)</Label>
                  <Select
                    value={formData.hodId}
                    onValueChange={(value) =>
                      setFormData({ ...formData, hodId: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select HOD" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">None</SelectItem>
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
                    {editingDepartment ? "Update" : "Create"}
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
                <TableHead>Building</TableHead>
                <TableHead>University</TableHead>
                <TableHead>HOD</TableHead>
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
              ) : departments.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No departments found
                  </TableCell>
                </TableRow>
              ) : (
                departments.map((department) => (
                  <TableRow key={department.departmentId}>
                    <TableCell>{department.departmentId}</TableCell>
                    <TableCell className="font-medium">{department.name}</TableCell>
                    <TableCell>{department.building}</TableCell>
                    <TableCell>{getUniversityName(department.universityId)}</TableCell>
                    <TableCell>{getFacultyName(department.hodId)}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openEditDialog(department)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(department.departmentId)}
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
