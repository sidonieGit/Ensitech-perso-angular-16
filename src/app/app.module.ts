import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GestionCoursComponent } from './components/gestion-cours/gestion-cours.component';
import { GestionStudentsComponent } from './components/gestion-students/gestion-students.component';
import { GestionTeachersComponent } from './components/gestion-teachers/gestion-teachers.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FiltercoursePipe } from './filtercourse.pipe';
import { FilterpipePipe } from './filterpipe.pipe';
import { ReportsComponent } from './reports/reports.component';

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
    // SearchStudentComponent,
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
