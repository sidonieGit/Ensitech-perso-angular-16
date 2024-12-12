import { Component } from '@angular/core';
import { COURSES } from '../mock-cours';

@Component({
  selector: 'app-gestion-cours',
  templateUrl: './gestion-cours.component.html',
  styleUrls: ['./gestion-cours.component.css'],
})
export class GestionCoursComponent {
  courses = COURSES;
  courseFilter: string ='';
}
