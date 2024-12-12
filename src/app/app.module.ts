import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GestionCoursComponent } from './gestion-cours/gestion-cours.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { GestionStudentsComponent } from './gestion-students/gestion-students.component';
import { ReportsComponent } from './reports/reports.component';
import { GestionTeachersComponent } from './gestion-teachers/gestion-teachers.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { FilterpipePipe } from './filterpipe.pipe';
import { FiltercoursePipe } from './filtercourse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    GestionCoursComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    DashboardMainComponent,
    GestionStudentsComponent,
    ReportsComponent,
    GestionTeachersComponent,
    SearchStudentComponent,
    FilterpipePipe,
    FiltercoursePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Ajout de FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
