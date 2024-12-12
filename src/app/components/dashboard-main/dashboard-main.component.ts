import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../data.service";
import {Student} from "../student";

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {
  totalStudents : number = 0;
  constructor(private dataService: DataService) {};

  ngOnInit() {
    this.totalStudents = this.dataService.getStudents().length;
  }
}