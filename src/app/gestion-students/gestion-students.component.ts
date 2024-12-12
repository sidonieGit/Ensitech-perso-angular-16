import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../student';
import { Cours } from '../cours';

@Component({
  selector: 'app-gestion-students',
  templateUrl: './gestion-students.component.html',
  styleUrls: ['./gestion-students.component.css'],
})
export class GestionStudentsComponent implements OnInit {
  students: Student[] = [];
  courses: Cours[] = [];
  paginatedStudents: Student[] = [];
  associatedCourses: Cours[] = [];
  selectedStudent: Student | null = null; // Track the selected student
  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 1;

  newStudent: Student = {
    nom: '',
    prenom: '',
    dateInscription: new Date(),
    email: '',
    telephone: '',
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadStudents();
    this.loadCourses();
    this.updatePagination();
  }

  // Load students from the service
  loadStudents(): void {
    this.students = this.dataService.getStudents();
    this.updatePagination();
  }

  // Load courses from the service
  loadCourses(): void {
    this.courses = this.dataService.getCourses();
  }

  // Add a new student
  addStudent(): void {
    if (this.newStudent.nom && this.newStudent.prenom) {
      this.newStudent.dateInscription = new Date();
      this.dataService.addStudent(this.newStudent);
      this.loadStudents();
      this.resetNewStudent();
    }
  }
  selectStudent(student: Student): void {
    this.selectedStudent = student;
  }
  // Reset the student form
  resetNewStudent(): void {
    this.newStudent = {
      nom: '',
      prenom: '',
      dateInscription: new Date(),
      email: '',
      telephone: '',
    };
  }

  // View student details
  viewStudent(student: Student): void {
    this.selectedStudent = student;
  }

  // Handle course association
  associateCourses(student: Student): void {
    this.selectedStudent = student;
    this.associatedCourses = []; // Clear any previously selected courses
  }

  // Toggle course association
  toggleCourseAssociation(course: Cours): void {
    const index = this.associatedCourses.findIndex((c) => c.id === course.id);
    if (index > -1) {
      this.associatedCourses.splice(index, 1); // Remove if already selected
    } else {
      this.associatedCourses.push(course); // Add if not already selected
    }
  }

  // Finalize course association
  saveAssociatedCourses(): void {
    if (this.selectedStudent) {
      console.log(
        `Courses associated with ${this.selectedStudent.nom}:`,
        this.associatedCourses
      );
      this.associatedCourses = []; // Reset after saving
    }
  }

  // Pagination logic
  updatePagination(): void {
    this.totalPages = Math.ceil(this.students.length / this.itemsPerPage);
    this.changePage(this.currentPage);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedStudents = this.students.slice(startIndex, endIndex);
  }
}
