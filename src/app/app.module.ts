import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routes';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeProjectsComponent } from './employee-projects/employee-projects.component';
import { LoginComponent } from './login/login.component';
import { EmployeeService } from './employee/employee.service';
import { CheckLoginGuard } from './guards/checkLogin/check-login.guard';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    NotfoundComponent,
    EmployeeDetailComponent,
    EmployeeOverviewComponent,
    EmployeeProjectsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EmployeeService, LoginService, CheckLoginGuard],
  // la 1 mang cac module nao dc chay truoc
  bootstrap: [AppComponent]
})
export class AppModule { }
