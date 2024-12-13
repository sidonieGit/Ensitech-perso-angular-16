import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css'],
})
export class DashboardMainComponent implements OnInit {
  totalStudents: number = 0;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.totalStudents = this.dataService.getStudents().length;
  }
}
