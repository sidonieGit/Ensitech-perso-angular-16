import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionCoursComponent } from './gestion-cours/gestion-cours.component';
import { ReportsComponent } from './reports/reports.component';
import { GestionStudentsComponent } from './gestion-students/gestion-students.component';
import { GestionTeachersComponent } from './gestion-teachers/gestion-teachers.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: GestionCoursComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'students', component: GestionStudentsComponent },
  { path: 'teachers', component: GestionTeachersComponent },
  { path: 'login-page', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
