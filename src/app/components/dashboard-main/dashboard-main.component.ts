import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students/students.service';
import { COURSES } from '../../mock-cours';
@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css'],
})
export class DashboardMainComponent implements OnInit {
  totalStudents: number = 0;
  totalCourses: number = 0;
  courses = COURSES;
  constructor(private studentService: StudentsService) {}

  ngOnInit() {
    this.totalStudents = this.studentService.getStudents().length;
    this.totalCourses = this.courses.length;
  }
}
