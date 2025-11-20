"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Search, Calendar } from "lucide-react";
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

type Schedule = {
  id: number;
  subjectId: number;
  classroomId: number;
  day: string;
  timeSlot: string;
};

type Subject = {
  subjectId: number;
  name: string;
};

type Classroom = {
  classroomId: number;
  roomNumber: string;
  building: string;
};

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    subjectId: "",
    classroomId: "",
    day: "",
    timeSlot: "",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const [schedRes, subjRes, classRes] = await Promise.all([
        fetch("/api/schedules?limit=100"),
        fetch("/api/subjects?limit=100"),
        fetch("/api/classrooms?limit=100"),
      ]);

      const [schedData, subjData, classData] = await Promise.all([
        schedRes.json(),
        subjRes.json(),
        classRes.json(),
      ]);

      setSchedules(schedData);
      setSubjects(subjData);
      setClassrooms(classData);
    } catch (error) {
      toast.error("Failed to load data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        subjectId: parseInt(formData.subjectId),
        classroomId: parseInt(formData.classroomId),
        day: formData.day,
        timeSlot: formData.timeSlot,
      };

      const response = await fetch("/api/schedules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to create schedule");

      toast.success("Schedule created");
      setIsDialogOpen(false);
      resetForm();
      fetchData();
    } catch (error) {
      toast.error("Failed to create schedule");
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this schedule?")) return;

    try {
      const response = await fetch(`/api/schedules?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete schedule");

      toast.success("Schedule deleted");
      fetchData();
    } catch (error) {
      toast.error("Failed to delete schedule");
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({
      subjectId: "",
      classroomId: "",
      day: "",
      timeSlot: "",
    });
  };

  const getSubjectName = (id: number) => {
    return subjects.find(s => s.subjectId === id)?.name || "Unknown";
  };

  const getClassroomInfo = (id: number) => {
    const classroom = classrooms.find(c => c.classroomId === id);
    return classroom ? `${classroom.roomNumber} (${classroom.building})` : "Unknown";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8" />
            <div>
              <h1 className="text-3xl font-bold">Class Schedules</h1>
              <p className="text-muted-foreground mt-1">
                Manage class schedules and timetables
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end items-center mb-6">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="w-4 h-4 mr-2" />
                Add Schedule
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Schedule</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="subjectId">Subject</Label>
                  <Select
                    value={formData.subjectId}
                    onValueChange={(value) =>
                      setFormData({ ...formData, subjectId: value })
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem
                          key={subject.subjectId}
                          value={subject.subjectId.toString()}
                        >
                          {subject.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="classroomId">Classroom</Label>
                  <Select
                    value={formData.classroomId}
                    onValueChange={(value) =>
                      setFormData({ ...formData, classroomId: value })
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select classroom" />
                    </SelectTrigger>
                    <SelectContent>
                      {classrooms.map((classroom) => (
                        <SelectItem
                          key={classroom.classroomId}
                          value={classroom.classroomId.toString()}
                        >
                          {classroom.roomNumber} - {classroom.building}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="day">Day</Label>
                  <Select
                    value={formData.day}
                    onValueChange={(value) =>
                      setFormData({ ...formData, day: value })
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select day" />
                    </SelectTrigger>
                    <SelectContent>
                      {DAYS.map((day) => (
                        <SelectItem key={day} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeSlot">Time Slot</Label>
                  <Input
                    id="timeSlot"
                    placeholder="e.g., 9:00-10:00 AM"
                    value={formData.timeSlot}
                    onChange={(e) =>
                      setFormData({ ...formData, timeSlot: e.target.value })
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
                  <Button type="submit">Create</Button>
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
                <TableHead>Subject</TableHead>
                <TableHead>Classroom</TableHead>
                <TableHead>Day</TableHead>
                <TableHead>Time Slot</TableHead>
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
              ) : schedules.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No schedules found
                  </TableCell>
                </TableRow>
              ) : (
                schedules.map((schedule) => (
                  <TableRow key={schedule.id}>
                    <TableCell>{schedule.id}</TableCell>
                    <TableCell className="font-medium">
                      {getSubjectName(schedule.subjectId)}
                    </TableCell>
                    <TableCell>{getClassroomInfo(schedule.classroomId)}</TableCell>
                    <TableCell>{schedule.day}</TableCell>
                    <TableCell>{schedule.timeSlot}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(schedule.id)}
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
