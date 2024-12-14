import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students/students.service';
import { Teacher } from '../../interfaces/teachers-interface';
import { COURSES } from '../../mock-cours';
import { TEACHERS } from '../../mock-teachers';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css'],
})
export class DashboardMainComponent implements OnInit {
  totalStudents: number = 0;
  totalCourses: number = 0;
  totalTeachers: number = 0;
  teachers: Teacher[] = TEACHERS;
  courses = COURSES;
  constructor(private studentService: StudentsService) {}

  ngOnInit() {
    this.totalStudents = this.studentService.getStudents().length;
    this.totalCourses = this.courses.length;
    this.totalTeachers = this.teachers.length;
  }
  // Données pour le graphique
  public barChartData = {
    labels: ['Etudiants', 'Enseignants', 'Cours'], // Noms des catégories
    datasets: [
      {
        label: 'Effectif',
        data: [
          this.studentService.getStudents().length,
          this.teachers.length,
          this.courses.length,
        ], // Données correspondantes
        backgroundColor: ['#006699', '#f1bb35', '#38a3a5'], // Couleurs des barres
        borderColor: ['#f3f4f6', '#f3f4f6', '#f3f4f6'], // Couleurs des bordures
        borderWidth: 1,
        hoverBackgroundColor: ['#444a58', '#444a58', '#444a58'],
      },
    ],
    options: [
      {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    ],
  };
  // Options de configuration
}
