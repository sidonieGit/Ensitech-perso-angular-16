import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {COURSES} from "../../mock-cours";
import {Teacher} from "../../interfaces/teachers-interface";
import {TEACHERS} from "../../mock-teachers";
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
}
