"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GraduationCap, Loader2, Plus, Trash2, ChevronRight, ChevronLeft, Check } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { toast } from "sonner";
import { api, fetcher } from "@/lib/api";

type Department = {
  tempId: string;
  name: string;
  building: string;
};

type Faculty = {
  tempId: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  departmentTempId: string;
};

type Student = {
  tempId: string;
  name: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  phone: string;
  departmentTempId: string;
};

type Course = {
  tempId: string;
  courseName: string;
  credits: number;
  semester: number;
  departmentTempId: string;
};

type Subject = {
  tempId: string;
  name: string;
  credits: number;
  courseTempId: string;
  facultyTempId: string;
};

type Classroom = {
  tempId: string;
  roomNumber: string;
  building: string;
  capacity: number;
};

type Enrollment = {
  tempId: string;
  studentTempId: string;
  courseTempId: string;
  grade: string;
};

type Schedule = {
  tempId: string;
  subjectTempId: string;
  classroomTempId: string;
  day: string;
  timeSlot: string;
};

export default function UniversityRegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const universityId = searchParams.get("id");
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // University Data
  const [universityData, setUniversityData] = useState({
    name: "",
    location: "",
    establishedYear: new Date().getFullYear(),
  });

  // Entity Arrays
  const [departments, setDepartments] = useState<Department[]>([]);
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const steps = [
    { title: "University Info", description: "Basic university details" },
    { title: "Departments", description: "Add departments" },
    { title: "Faculty", description: "Add faculty members" },
    { title: "Students", description: "Add students" },
    { title: "Courses", description: "Add courses" },
    { title: "Subjects", description: "Add subjects" },
    { title: "Classrooms", description: "Add classrooms" },
    { title: "Enrollments", description: "Enroll students in courses" },
    { title: "Schedules", description: "Schedule subjects in classrooms" },
    { title: "Review", description: "Review and submit" },
  ];

  const generateTempId = () => `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Add functions for each entity
  const addDepartment = () => {
    setDepartments([...departments, { tempId: generateTempId(), name: "", building: "" }]);
  };

  const removeDepartment = (tempId: string) => {
    setDepartments(departments.filter(d => d.tempId !== tempId));
  };

  const updateDepartment = (tempId: string, field: keyof Department, value: string) => {
    setDepartments(departments.map(d => d.tempId === tempId ? { ...d, [field]: value } : d));
  };

  const addFaculty = () => {
    setFaculty([...faculty, { 
      tempId: generateTempId(), 
      name: "", 
      designation: "", 
      email: "", 
      phone: "", 
      departmentTempId: departments[0]?.tempId || "" 
    }]);
  };

  const removeFaculty = (tempId: string) => {
    setFaculty(faculty.filter(f => f.tempId !== tempId));
  };

  const updateFaculty = (tempId: string, field: keyof Faculty, value: string) => {
    setFaculty(faculty.map(f => f.tempId === tempId ? { ...f, [field]: value } : f));
  };

  const addStudent = () => {
    setStudents([...students, {
      tempId: generateTempId(),
      name: "",
      email: "",
      dateOfBirth: "",
      gender: "Male",
      address: "",
      phone: "",
      departmentTempId: departments[0]?.tempId || ""
    }]);
  };

  const removeStudent = (tempId: string) => {
    setStudents(students.filter(s => s.tempId !== tempId));
  };

  const updateStudent = (tempId: string, field: keyof Student, value: string) => {
    setStudents(students.map(s => s.tempId === tempId ? { ...s, [field]: value } : s));
  };

  const addCourse = () => {
    setCourses([...courses, {
      tempId: generateTempId(),
      courseName: "",
      credits: 3,
      semester: 1,
      departmentTempId: departments[0]?.tempId || ""
    }]);
  };

  const removeCourse = (tempId: string) => {
    setCourses(courses.filter(c => c.tempId !== tempId));
  };

  const updateCourse = (tempId: string, field: keyof Course, value: string | number) => {
    setCourses(courses.map(c => c.tempId === tempId ? { ...c, [field]: value } : c));
  };

  const addSubject = () => {
    setSubjects([...subjects, {
      tempId: generateTempId(),
      name: "",
      credits: 3,
      courseTempId: courses[0]?.tempId || "",
      facultyTempId: faculty[0]?.tempId || ""
    }]);
  };

  const removeSubject = (tempId: string) => {
    setSubjects(subjects.filter(s => s.tempId !== tempId));
  };

  const updateSubject = (tempId: string, field: keyof Subject, value: string | number) => {
    setSubjects(subjects.map(s => s.tempId === tempId ? { ...s, [field]: value } : s));
  };

  const addClassroom = () => {
    setClassrooms([...classrooms, {
      tempId: generateTempId(),
      roomNumber: "",
      building: "",
      capacity: 30
    }]);
  };

  const removeClassroom = (tempId: string) => {
    setClassrooms(classrooms.filter(c => c.tempId !== tempId));
  };

  const updateClassroom = (tempId: string, field: keyof Classroom, value: string | number) => {
    setClassrooms(classrooms.map(c => c.tempId === tempId ? { ...c, [field]: value } : c));
  };

  const addEnrollment = () => {
    setEnrollments([...enrollments, {
      tempId: generateTempId(),
      studentTempId: students[0]?.tempId || "",
      courseTempId: courses[0]?.tempId || "",
      grade: ""
    }]);
  };

  const removeEnrollment = (tempId: string) => {
    setEnrollments(enrollments.filter(e => e.tempId !== tempId));
  };

  const updateEnrollment = (tempId: string, field: keyof Enrollment, value: string) => {
    setEnrollments(enrollments.map(e => e.tempId === tempId ? { ...e, [field]: value } : e));
  };

  const addSchedule = () => {
    setSchedules([...schedules, {
      tempId: generateTempId(),
      subjectTempId: subjects[0]?.tempId || "",
      classroomTempId: classrooms[0]?.tempId || "",
      day: "Monday",
      timeSlot: "09:00-10:00"
    }]);
  };

  const removeSchedule = (tempId: string) => {
    setSchedules(schedules.filter(s => s.tempId !== tempId));
  };

  const updateSchedule = (tempId: string, field: keyof Schedule, value: string) => {
    setSchedules(schedules.map(s => s.tempId === tempId ? { ...s, [field]: value } : s));
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 0:
        return universityData.name && universityData.location && universityData.establishedYear;
      case 1:
        return departments.length > 0 && departments.every(d => d.name && d.building);
      case 2:
        return true; // Faculty is optional
      case 3:
        return true; // Students are optional
      case 4:
        return true; // Courses are optional
      case 5:
        return subjects.length === 0 || (courses.length > 0 && faculty.length > 0);
      case 6:
        return true; // Classrooms are optional
      case 7:
        return enrollments.length === 0 || (students.length > 0 && courses.length > 0);
      case 8:
        return schedules.length === 0 || (subjects.length > 0 && classrooms.length > 0);
      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    if (!universityId) {
      toast.error("University ID is required");
      return;
    }

    setIsLoading(true);

    try {
      // Create university
      const university = await fetcher(api.universities.create(), {
        method: "POST",
        body: JSON.stringify({
          name: universityData.name,
          location: universityData.location,
          establishedYear: universityData.establishedYear,
        }),
      });

      const finalUniversityId = (university as any).universityId;

      // Map temp IDs to real IDs
      const departmentIdMap: Record<string, number> = {};
      const facultyIdMap: Record<string, number> = {};
      const studentIdMap: Record<string, number> = {};
      const courseIdMap: Record<string, number> = {};
      const subjectIdMap: Record<string, number> = {};
      const classroomIdMap: Record<string, number> = {};

      // Create departments
      for (const dept of departments) {
        const department = await fetcher(api.departments.create(), {
          method: "POST",
          body: JSON.stringify({
            name: dept.name,
            building: dept.building,
            universityId: finalUniversityId,
          }),
        });
        departmentIdMap[dept.tempId] = (department as any).departmentId;
      }

      // Create faculty
      for (const fac of faculty) {
        const facultyMember = await fetcher(api.faculty.create(), {
          method: "POST",
          body: JSON.stringify({
            name: fac.name,
            designation: fac.designation,
            email: fac.email,
            phone: fac.phone,
            departmentId: departmentIdMap[fac.departmentTempId],
          }),
        });
        facultyIdMap[fac.tempId] = (facultyMember as any).facultyId;
      }

      // Create students
      for (const student of students) {
        const newStudent = await fetcher(api.students.create(), {
          method: "POST",
          body: JSON.stringify({
            name: student.name,
            email: student.email,
            dateOfBirth: student.dateOfBirth || "2000-01-01",
            gender: student.gender || "Other",
            phone: student.phone,
            address: student.address,
            departmentId: departmentIdMap[student.departmentTempId],
          }),
        });
        studentIdMap[student.tempId] = (newStudent as any).studentId;
      }

      // Create courses
      for (const course of courses) {
        const newCourse = await fetcher(api.courses.create(), {
          method: "POST",
          body: JSON.stringify({
            courseName: course.courseName,
            credits: course.credits,
            semester: course.semester,
            departmentId: departmentIdMap[course.departmentTempId],
          }),
        });
        courseIdMap[course.tempId] = (newCourse as any).courseId;
      }

      // Create subjects
      for (const subject of subjects) {
        const newSubject = await fetcher(api.subjects.create(), {
          method: "POST",
          body: JSON.stringify({
            name: subject.name,
            credits: subject.credits,
            courseId: courseIdMap[subject.courseTempId],
            facultyId: facultyIdMap[subject.facultyTempId],
          }),
        });
        subjectIdMap[subject.tempId] = (newSubject as any).subjectId;
      }

      // Create classrooms
      for (const classroom of classrooms) {
        const newClassroom = await fetcher(api.classrooms.create(), {
          method: "POST",
          body: JSON.stringify({
            roomNumber: classroom.roomNumber,
            building: classroom.building,
            capacity: classroom.capacity,
            universityId: finalUniversityId,
          }),
        });
        classroomIdMap[classroom.tempId] = (newClassroom as any).classroomId;
      }

      // Create enrollments
      for (const enrollment of enrollments) {
        await fetcher(api.enrollments.create(), {
          method: "POST",
          body: JSON.stringify({
            studentId: studentIdMap[enrollment.studentTempId],
            courseId: courseIdMap[enrollment.courseTempId],
            grade: enrollment.grade || null,
          }),
        });
      }

      // Create schedules
      for (const schedule of schedules) {
        await fetcher(api.schedules.create(), {
          method: "POST",
          body: JSON.stringify({
            subjectId: subjectIdMap[schedule.subjectTempId],
            classroomId: classroomIdMap[schedule.classroomTempId],
            day: schedule.day,
            timeSlot: schedule.timeSlot,
          }),
        });
      }

      toast.success("University registered successfully!");
      router.push(`/?registered=true&universityId=${finalUniversityId}`);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Failed to register university. Please try again.");
      setIsLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>University ID</Label>
              <Input value={universityId || ""} disabled />
            </div>
            <div className="space-y-2">
              <Label>University Name</Label>
              <Input
                value={universityData.name}
                onChange={(e) => setUniversityData({ ...universityData, name: e.target.value })}
                placeholder="e.g., Stanford University"
              />
            </div>
            <div className="space-y-2">
              <Label>Location</Label>
              <Input
                value={universityData.location}
                onChange={(e) => setUniversityData({ ...universityData, location: e.target.value })}
                placeholder="e.g., Stanford, CA"
              />
            </div>
            <div className="space-y-2">
              <Label>Established Year</Label>
              <Input
                type="number"
                value={universityData.establishedYear}
                onChange={(e) => setUniversityData({ ...universityData, establishedYear: parseInt(e.target.value) })}
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Departments</h3>
              <Button onClick={addDepartment} size="sm">
                <Plus className="w-4 h-4 mr-1" /> Add Department
              </Button>
            </div>
            {departments.map((dept, index) => (
              <Card key={dept.tempId}>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Department {index + 1}</span>
                    <Button onClick={() => removeDepartment(dept.tempId)} size="sm" variant="destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Input
                    placeholder="Department Name"
                    value={dept.name}
                    onChange={(e) => updateDepartment(dept.tempId, "name", e.target.value)}
                  />
                  <Input
                    placeholder="Building"
                    value={dept.building}
                    onChange={(e) => updateDepartment(dept.tempId, "building", e.target.value)}
                  />
                </CardContent>
              </Card>
            ))}
            {departments.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No departments added yet. Add at least one department to continue.</p>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Faculty Members</h3>
              <Button onClick={addFaculty} size="sm" disabled={departments.length === 0}>
                <Plus className="w-4 h-4 mr-1" /> Add Faculty
              </Button>
            </div>
            {faculty.map((fac, index) => (
              <Card key={fac.tempId}>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Faculty {index + 1}</span>
                    <Button onClick={() => removeFaculty(fac.tempId)} size="sm" variant="destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Input
                    placeholder="Faculty Name"
                    value={fac.name}
                    onChange={(e) => updateFaculty(fac.tempId, "name", e.target.value)}
                  />
                  <Input
                    placeholder="Designation"
                    value={fac.designation}
                    onChange={(e) => updateFaculty(fac.tempId, "designation", e.target.value)}
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    value={fac.email}
                    onChange={(e) => updateFaculty(fac.tempId, "email", e.target.value)}
                  />
                  <Input
                    placeholder="Phone"
                    value={fac.phone}
                    onChange={(e) => updateFaculty(fac.tempId, "phone", e.target.value)}
                  />
                  <select
                    className="w-full p-2 border rounded-md"
                    value={fac.departmentTempId}
                    onChange={(e) => updateFaculty(fac.tempId, "departmentTempId", e.target.value)}
                  >
                    {departments.map(dept => (
                      <option key={dept.tempId} value={dept.tempId}>{dept.name}</option>
                    ))}
                  </select>
                </CardContent>
              </Card>
            ))}
            {departments.length === 0 && (
              <p className="text-center text-muted-foreground py-8">Please add departments first.</p>
            )}
            {faculty.length === 0 && departments.length > 0 && (
              <p className="text-center text-muted-foreground py-8">No faculty added yet. (Optional)</p>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Students</h3>
              <Button onClick={addStudent} size="sm" disabled={departments.length === 0}>
                <Plus className="w-4 h-4 mr-1" /> Add Student
              </Button>
            </div>
            {students.map((student, index) => (
              <Card key={student.tempId}>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Student {index + 1}</span>
                    <Button onClick={() => removeStudent(student.tempId)} size="sm" variant="destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Input
                    placeholder="Student Name"
                    value={student.name}
                    onChange={(e) => updateStudent(student.tempId, "name", e.target.value)}
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    value={student.email}
                    onChange={(e) => updateStudent(student.tempId, "email", e.target.value)}
                  />
                  <Input
                    placeholder="Date of Birth"
                    type="date"
                    value={student.dateOfBirth}
                    onChange={(e) => updateStudent(student.tempId, "dateOfBirth", e.target.value)}
                  />
                  <select
                    className="w-full p-2 border rounded-md"
                    value={student.gender}
                    onChange={(e) => updateStudent(student.tempId, "gender", e.target.value)}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <Input
                    placeholder="Address"
                    value={student.address}
                    onChange={(e) => updateStudent(student.tempId, "address", e.target.value)}
                  />
                  <Input
                    placeholder="Phone"
                    value={student.phone}
                    onChange={(e) => updateStudent(student.tempId, "phone", e.target.value)}
                  />
                  <select
                    className="w-full p-2 border rounded-md"
                    value={student.departmentTempId}
                    onChange={(e) => updateStudent(student.tempId, "departmentTempId", e.target.value)}
                  >
                    {departments.map(dept => (
                      <option key={dept.tempId} value={dept.tempId}>{dept.name}</option>
                    ))}
                  </select>
                </CardContent>
              </Card>
            ))}
            {departments.length === 0 && (
              <p className="text-center text-muted-foreground py-8">Please add departments first.</p>
            )}
            {students.length === 0 && departments.length > 0 && (
              <p className="text-center text-muted-foreground py-8">No students added yet. (Optional)</p>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Courses</h3>
              <Button onClick={addCourse} size="sm" disabled={departments.length === 0}>
                <Plus className="w-4 h-4 mr-1" /> Add Course
              </Button>
            </div>
            {courses.map((course, index) => (
              <Card key={course.tempId}>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Course {index + 1}</span>
                    <Button onClick={() => removeCourse(course.tempId)} size="sm" variant="destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Input
                    placeholder="Course Name"
                    value={course.courseName}
                    onChange={(e) => updateCourse(course.tempId, "courseName", e.target.value)}
                  />
                  <Input
                    placeholder="Credits"
                    type="number"
                    value={course.credits}
                    onChange={(e) => updateCourse(course.tempId, "credits", parseInt(e.target.value))}
                  />
                  <Input
                    placeholder="Semester"
                    type="number"
                    value={course.semester}
                    onChange={(e) => updateCourse(course.tempId, "semester", parseInt(e.target.value))}
                  />
                  <select
                    className="w-full p-2 border rounded-md"
                    value={course.departmentTempId}
                    onChange={(e) => updateCourse(course.tempId, "departmentTempId", e.target.value)}
                  >
                    {departments.map(dept => (
                      <option key={dept.tempId} value={dept.tempId}>{dept.name}</option>
                    ))}
                  </select>
                </CardContent>
              </Card>
            ))}
            {departments.length === 0 && (
              <p className="text-center text-muted-foreground py-8">Please add departments first.</p>
            )}
            {courses.length === 0 && departments.length > 0 && (
              <p className="text-center text-muted-foreground py-8">No courses added yet. (Optional)</p>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Subjects</h3>
              <Button onClick={addSubject} size="sm" disabled={courses.length === 0 || faculty.length === 0}>
                <Plus className="w-4 h-4 mr-1" /> Add Subject
              </Button>
            </div>
            {subjects.map((subject, index) => (
              <Card key={subject.tempId}>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Subject {index + 1}</span>
                    <Button onClick={() => removeSubject(subject.tempId)} size="sm" variant="destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Input
                    placeholder="Subject Name"
                    value={subject.name}
                    onChange={(e) => updateSubject(subject.tempId, "name", e.target.value)}
                  />
                  <Input
                    placeholder="Credits"
                    type="number"
                    value={subject.credits}
                    onChange={(e) => updateSubject(subject.tempId, "credits", parseInt(e.target.value))}
                  />
                  <select
                    className="w-full p-2 border rounded-md"
                    value={subject.courseTempId}
                    onChange={(e) => updateSubject(subject.tempId, "courseTempId", e.target.value)}
                  >
                    <option value="">Select Course</option>
                    {courses.map(course => (
                      <option key={course.tempId} value={course.tempId}>{course.courseName}</option>
                    ))}
                  </select>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={subject.facultyTempId}
                    onChange={(e) => updateSubject(subject.tempId, "facultyTempId", e.target.value)}
                  >
                    <option value="">Select Faculty</option>
                    {faculty.map(fac => (
                      <option key={fac.tempId} value={fac.tempId}>{fac.name}</option>
                    ))}
                  </select>
                </CardContent>
              </Card>
            ))}
            {(courses.length === 0 || faculty.length === 0) && (
              <p className="text-center text-muted-foreground py-8">Please add courses and faculty first.</p>
            )}
            {subjects.length === 0 && courses.length > 0 && faculty.length > 0 && (
              <p className="text-center text-muted-foreground py-8">No subjects added yet. (Optional)</p>
            )}
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Classrooms</h3>
              <Button onClick={addClassroom} size="sm">
                <Plus className="w-4 h-4 mr-1" /> Add Classroom
              </Button>
            </div>
            {classrooms.map((classroom, index) => (
              <Card key={classroom.tempId}>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Classroom {index + 1}</span>
                    <Button onClick={() => removeClassroom(classroom.tempId)} size="sm" variant="destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Input
                    placeholder="Room Number"
                    value={classroom.roomNumber}
                    onChange={(e) => updateClassroom(classroom.tempId, "roomNumber", e.target.value)}
                  />
                  <Input
                    placeholder="Building"
                    value={classroom.building}
                    onChange={(e) => updateClassroom(classroom.tempId, "building", e.target.value)}
                  />
                  <Input
                    placeholder="Capacity"
                    type="number"
                    value={classroom.capacity}
                    onChange={(e) => updateClassroom(classroom.tempId, "capacity", parseInt(e.target.value))}
                  />
                </CardContent>
              </Card>
            ))}
            {classrooms.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No classrooms added yet. (Optional)</p>
            )}
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Enrollments</h3>
              <Button onClick={addEnrollment} size="sm" disabled={students.length === 0 || courses.length === 0}>
                <Plus className="w-4 h-4 mr-1" /> Add Enrollment
              </Button>
            </div>
            {enrollments.map((enrollment, index) => (
              <Card key={enrollment.tempId}>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Enrollment {index + 1}</span>
                    <Button onClick={() => removeEnrollment(enrollment.tempId)} size="sm" variant="destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={enrollment.studentTempId}
                    onChange={(e) => updateEnrollment(enrollment.tempId, "studentTempId", e.target.value)}
                  >
                    <option value="">Select Student</option>
                    {students.map(student => (
                      <option key={student.tempId} value={student.tempId}>{student.name}</option>
                    ))}
                  </select>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={enrollment.courseTempId}
                    onChange={(e) => updateEnrollment(enrollment.tempId, "courseTempId", e.target.value)}
                  >
                    <option value="">Select Course</option>
                    {courses.map(course => (
                      <option key={course.tempId} value={course.tempId}>{course.courseName}</option>
                    ))}
                  </select>
                  <Input
                    placeholder="Grade (optional)"
                    value={enrollment.grade}
                    onChange={(e) => updateEnrollment(enrollment.tempId, "grade", e.target.value)}
                  />
                </CardContent>
              </Card>
            ))}
            {(students.length === 0 || courses.length === 0) && (
              <p className="text-center text-muted-foreground py-8">Please add students and courses first.</p>
            )}
            {enrollments.length === 0 && students.length > 0 && courses.length > 0 && (
              <p className="text-center text-muted-foreground py-8">No enrollments added yet. (Optional)</p>
            )}
          </div>
        );

      case 8:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Schedules</h3>
              <Button onClick={addSchedule} size="sm" disabled={subjects.length === 0 || classrooms.length === 0}>
                <Plus className="w-4 h-4 mr-1" /> Add Schedule
              </Button>
            </div>
            {schedules.map((schedule, index) => (
              <Card key={schedule.tempId}>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Schedule {index + 1}</span>
                    <Button onClick={() => removeSchedule(schedule.tempId)} size="sm" variant="destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={schedule.subjectTempId}
                    onChange={(e) => updateSchedule(schedule.tempId, "subjectTempId", e.target.value)}
                  >
                    <option value="">Select Subject</option>
                    {subjects.map(subject => (
                      <option key={subject.tempId} value={subject.tempId}>{subject.name}</option>
                    ))}
                  </select>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={schedule.classroomTempId}
                    onChange={(e) => updateSchedule(schedule.tempId, "classroomTempId", e.target.value)}
                  >
                    <option value="">Select Classroom</option>
                    {classrooms.map(classroom => (
                      <option key={classroom.tempId} value={classroom.tempId}>
                        {classroom.roomNumber} - {classroom.building}
                      </option>
                    ))}
                  </select>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={schedule.day}
                    onChange={(e) => updateSchedule(schedule.tempId, "day", e.target.value)}
                  >
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                  <Input
                    placeholder="Time Slot (e.g., 09:00-10:00)"
                    value={schedule.timeSlot}
                    onChange={(e) => updateSchedule(schedule.tempId, "timeSlot", e.target.value)}
                  />
                </CardContent>
              </Card>
            ))}
            {(subjects.length === 0 || classrooms.length === 0) && (
              <p className="text-center text-muted-foreground py-8">Please add subjects and classrooms first.</p>
            )}
            {schedules.length === 0 && subjects.length > 0 && classrooms.length > 0 && (
              <p className="text-center text-muted-foreground py-8">No schedules added yet. (Optional)</p>
            )}
          </div>
        );

      case 9:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Review Your Registration</h3>
            <Card>
              <CardContent className="pt-6 space-y-2">
                <div><strong>University:</strong> {universityData.name}</div>
                <div><strong>Location:</strong> {universityData.location}</div>
                <div><strong>Established:</strong> {universityData.establishedYear}</div>
                <div><strong>Departments:</strong> {departments.length}</div>
                <div><strong>Faculty:</strong> {faculty.length}</div>
                <div><strong>Students:</strong> {students.length}</div>
                <div><strong>Courses:</strong> {courses.length}</div>
                <div><strong>Subjects:</strong> {subjects.length}</div>
                <div><strong>Classrooms:</strong> {classrooms.length}</div>
                <div><strong>Enrollments:</strong> {enrollments.length}</div>
                <div><strong>Schedules:</strong> {schedules.length}</div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-purple-950 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">Register New University</CardTitle>
                <CardDescription>Set up your university with all necessary details</CardDescription>
              </div>
            </div>
            
            {/* Progress Steps */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      index < currentStep ? "bg-primary text-white" :
                      index === currentStep ? "bg-primary text-white" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {index < currentStep ? <Check className="w-4 h-4" /> : index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-8 h-1 ${index < currentStep ? "bg-primary" : "bg-muted"}`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-sm text-center">
                <div className="font-medium">{steps[currentStep].title}</div>
                <div className="text-muted-foreground">{steps[currentStep].description}</div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="min-h-[400px]">
            {renderStepContent()}
          </CardContent>

          <div className="p-6 border-t flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0 || isLoading}
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Previous
            </Button>
            
            {currentStep < steps.length - 1 ? (
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!canProceedToNext() || isLoading}
              >
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Registering...
                  </>
                ) : (
                  "Complete Registration"
                )}
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}