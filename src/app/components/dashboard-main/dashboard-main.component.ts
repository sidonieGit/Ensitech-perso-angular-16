import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {COURSES} from "../../mock-cours";
import {Teacher} from "../../interfaces/teachers-interface";
import {TEACHERS} from "../../mock-teachers";
import {NgChartsModule} from "ng2-charts";

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
  courses  = COURSES
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.totalStudents = this.dataService.getStudents().length;
    this.totalCourses = this.courses.length;
    this.totalTeachers = this.teachers.length;
  }
  // Données pour le graphique
  public barChartData = {
    labels: ['Etudiants', 'Enseignants', 'Cours'], // Noms des catégories
    datasets: [
      {
        label: 'Effectif',
        data: [this.dataService.getStudents().length, this.teachers.length, this.courses.length], // Données correspondantes
        backgroundColor: ['#006699', '#f1bb35', '#38a3a5'], // Couleurs des barres
        borderColor: ['#f3f4f6', '#f3f4f6', '#f3f4f6'], // Couleurs des bordures
        borderWidth: 1,
        hoverBackgroundColor: ['#444a58', '#444a58', '#444a58'],
      },
    ],
  options :[
    {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

  ]
  };
  // Options de configuration

}
