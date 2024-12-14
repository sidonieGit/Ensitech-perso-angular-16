import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students/students.service';
import { Student } from '../../student';

@Component({
  selector: 'app-gestion-students',
  templateUrl: './gestion-students.component.html',
  styleUrls: ['./gestion-students.component.css'],
})
export class GestionStudentsComponent implements OnInit {
  filtername: string = '';
  filtername: string = '';
  students: Student[] = [];
  selectedStudent: Student | null = null;
  filteredStudents: Student[] = [];
  editingStudent: Student | null = null;
  newStudent: Student = {
    nom: '',
    prenom: '',
    telephone: '',
    dateInscription: new Date(),
    email: '',
  };

  constructor(private student: StudentsService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.students = this.student.getStudents();
    this.updateFilteredStudents();
  }

  updateFilteredStudents(): void {
    this.filteredStudents = this.students.filter(
      (student) =>
        student.nom.toLowerCase().includes(this.filtername.toLowerCase()) ||
        student.prenom.toLowerCase().includes(this.filtername.toLowerCase())
    );
  }

  addStudent(): void {
    if (this.newStudent.nom && this.newStudent.prenom) {
      this.student.addStudent(this.newStudent);
      this.loadStudents();
      this.resetForm();
      this.updateFilteredStudents();
    }
  }

  resetForm(): void {
    this.newStudent = {
      nom: '',
      prenom: '',
      telephone: '',
      dateInscription: new Date(),
      email: '',
    };
  }

  deleteStudent(id: number | undefined): void {
    this.student.deleteStudent(id);
    this.loadStudents();
  }

  viewStudent(student: Student): void {
    this.selectedStudent = student;
  }

  editStudent(student: Student): void {
    this.editingStudent = { ...student };
  }

  saveEditStudent(): void {
    if (this.editingStudent) {
      this.student.updateStudent(this.editingStudent);
      this.loadStudents();
      this.editingStudent = null;
    }
  }
}
