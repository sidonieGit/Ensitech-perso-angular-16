import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GestionCoursComponent } from './components/gestion-cours/gestion-cours.component';
import { GestionStudentsComponent } from './components/gestion-students/gestion-students.component';
import { GestionTeachersComponent } from './components/gestion-teachers/gestion-teachers.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReportsComponent } from './reports/reports.component';

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
