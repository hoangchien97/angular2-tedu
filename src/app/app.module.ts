import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routes';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeProjectsComponent } from './employee-projects/employee-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    NotfoundComponent,
    EmployeeDetailComponent,
    EmployeeOverviewComponent,
    EmployeeProjectsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  // la 1 mang cac module nao dc chay truoc
  bootstrap: [AppComponent]
})
export class AppModule { }
