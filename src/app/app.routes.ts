import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeProjectsComponent } from './employee-projects/employee-projects.component';
import { LoginComponent } from './login/login.component';
import { CheckLoginGuard } from './guards/checkLogin/check-login.guard';
import { CheckSaveFormGuard } from './guards/checkLogin/check-save-form.guard';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';

const routes: Routes = [
    // { path: '', redirectTo:'employees', pathMatch: 'full' },
    { path: '', component: HomeComponent},
    { path: 'employees', component: EmployeeComponent,
        // canActivate: [CheckLoginGuard] 
    },
    { path: 'employees/:id', component: EmployeeDetailComponent,
        // canDeactivate: [CheckSaveFormGuard], 
        children: [
            {path: '', redirectTo: 'overview', pathMatch: 'full'},
            {path: 'overview', component: EmployeeOverviewComponent},
            {path: 'projects', component: EmployeeProjectsComponent}
        ]
    },
    { path : 'employees-create',component: EmployeeCreateComponent},
    { path: 'employees-edit/:id',component: EmployeeUpdateComponent},
        
    { path: 'login', component: LoginComponent},
    { path: '**', component: NotfoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 

export class AppRoutingModule {}
