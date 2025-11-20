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

export default function SchedulesPage() {
  const params = useParams();
  const router = useRouter();
  const universityId = params.university_id as string;
  const [schedules, setSchedules] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; scheduleId: number | null }>({
    open: false,
    scheduleId: null,
  });
  const [formData, setFormData] = useState({
    subjectId: "",
    classroomId: "",
    day: "",
    timeSlot: ""
  });

  useEffect(() => {
    const storedUniversityId = localStorage.getItem("university_id");
    if (!storedUniversityId || storedUniversityId !== universityId) {
      toast.error("Unauthorized access. Please login again.");
      router.push("/");
      return;
    }

    fetchSchedules();
  }, [universityId, router]);

  const fetchSchedules = async () => {
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.schedules.getAll(undefined, undefined, undefined, parseInt(universityId)));
      setSchedules(data);
    } catch (error) {
      toast.error("Error loading schedules");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchKey.trim()) {
      fetchSchedules();
      return;
    }
    try {
      setIsLoading(true);
      const data = await fetcher<any[]>(api.schedules.getAll(undefined, undefined, searchKey, parseInt(universityId)));
      setSchedules(data);
      toast.success(`Found ${data.length || 0} schedule(s)`);
    } catch (error) {
      toast.error("Search failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetcher(api.schedules.create(), {
        method: "POST",
        body: JSON.stringify({
          subjectId: parseInt(formData.subjectId),
          classroomId: parseInt(formData.classroomId),
          day: formData.day,
          timeSlot: formData.timeSlot
        }),
      });
      
      toast.success("Schedule added successfully");
      setShowAddForm(false);
      setFormData({ subjectId: "", classroomId: "", day: "", timeSlot: "" });
      fetchSchedules();
    } catch (error) {
      toast.error("Failed to add schedule");
    }
  };

  const handleDelete = async (id: number) => {
    setDeleteDialog({ open: true, scheduleId: id });
  };

  const confirmDelete = async () => {
    if (!deleteDialog.scheduleId) return;
    
    try {
      await fetcher(api.schedules.delete(deleteDialog.scheduleId), {
        method: "DELETE",
      });
      
      toast.success("Schedule deleted successfully");
      fetchSchedules();
    } catch (error) {
      toast.error("Failed to delete schedule");
    } finally {
      setDeleteDialog({ open: false, scheduleId: null });
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
            <CardTitle>Schedule Management (Scheduled_In)</CardTitle>
            <CardDescription>Add, search, and delete schedule records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Search by day (e.g., Monday)..."
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
                Add Schedule
              </Button>
            </div>

            {showAddForm && (
              <form onSubmit={handleAdd} className="border rounded-lg p-4 mb-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Subject ID</Label>
                    <Input
                      required
                      type="number"
                      value={formData.subjectId}
                      onChange={(e) => setFormData({ ...formData, subjectId: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Classroom ID</Label>
                    <Input
                      required
                      type="number"
                      value={formData.classroomId}
                      onChange={(e) => setFormData({ ...formData, classroomId: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Day</Label>
                    <Input
                      required
                      placeholder="e.g., Monday"
                      value={formData.day}
                      onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Time Slot</Label>
                    <Input
                      required
                      placeholder="e.g., 9:00-10:00"
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Add Schedule</Button>
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
            {schedules.map((schedule) => (
              <Card key={schedule.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                      <div>
                        <p className="text-sm text-muted-foreground">Subject ID</p>
                        <p className="font-semibold">{schedule.subjectId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Classroom ID</p>
                        <p className="font-semibold">{schedule.classroomId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Day</p>
                        <p className="font-semibold">{schedule.day}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Time Slot</p>
                        <p className="font-semibold">{schedule.timeSlot}</p>
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(schedule.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {schedules.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No schedules found</p>
            )}
          </div>
        )}
      </div>

      <Dialog open={deleteDialog.open} onOpenChange={(open) => setDeleteDialog({ open, scheduleId: null })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Schedule</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this schedule? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialog({ open: false, scheduleId: null })}>
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