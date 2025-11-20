"use client";

import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { api, fetcher } from "@/lib/api";
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
  DialogFooter,
  DialogDescription,
} from "../../../components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../components/ui/alert-dialog";
import { Label } from "../../../components/ui/label";
import { toast } from "sonner";

type University = {
  universityId: number;
  name: string;
  location: string;
  establishedYear: number;
};

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [deletingUniversity, setDeletingUniversity] = useState<University | null>(null);
  const [editingUniversity, setEditingUniversity] = useState<University | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    establishedYear: new Date().getFullYear(),
  });

  const fetchUniversities = async () => {
    try {
      setLoading(true);
      const data = await fetcher<University[]>(api.universities.getAll(search));
      setUniversities(data);
    } catch (error) {
      toast.error("Failed to load universities");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUniversities();
  }, [search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingUniversity) {
        await fetcher(api.universities.update(editingUniversity.universityId), {
          method: 'PUT',
          body: JSON.stringify(formData),
        });
        toast.success("University updated");
      } else {
        await fetcher(api.universities.create(), {
          method: 'POST',
          body: JSON.stringify(formData),
        });
        toast.success("University created");
      }
      
      setIsDialogOpen(false);
      resetForm();
      fetchUniversities();
    } catch (error) {
      toast.error("Failed to save university");
      console.error(error);
    }
  };

  const openDeleteDialog = (university: University) => {
    setDeletingUniversity(university);
    setIsDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!deletingUniversity) return;

    try {
      await fetcher(api.universities.delete(deletingUniversity.universityId), {
        method: 'DELETE',
      });

      toast.success("University deleted");
      setIsDeleteDialogOpen(false);
      setDeletingUniversity(null);
      fetchUniversities();
    } catch (error) {
      toast.error("Failed to delete university");
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      location: "",
      establishedYear: new Date().getFullYear(),
    });
    setEditingUniversity(null);
  };

  const openEditDialog = (university: University) => {
    setEditingUniversity(university);
    setFormData({
      name: university.name,
      location: university.location,
      establishedYear: university.establishedYear,
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Universities</h1>
          <p className="text-muted-foreground mt-2">
            Manage university information and records
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search universities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="w-4 h-4 mr-2" />
                Add University
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingUniversity ? "Edit University" : "Add New University"}
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
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="establishedYear">Established Year</Label>
                  <Input
                    id="establishedYear"
                    type="number"
                    value={formData.establishedYear}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        establishedYear: parseInt(e.target.value),
                      })
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
                    {editingUniversity ? "Update" : "Create"}
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
                <TableHead>Location</TableHead>
                <TableHead>Established Year</TableHead>
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
              ) : universities.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No universities found
                  </TableCell>
                </TableRow>
              ) : (
                universities.map((university) => (
                  <TableRow key={university.universityId}>
                    <TableCell>{university.universityId}</TableCell>
                    <TableCell className="font-medium">{university.name}</TableCell>
                    <TableCell>{university.location}</TableCell>
                    <TableCell>{university.establishedYear}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openEditDialog(university)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openDeleteDialog(university)}
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

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete University</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{deletingUniversity?.name}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeletingUniversity(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}