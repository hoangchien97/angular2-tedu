import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
    // { path: '', redirectTo:'employees', pathMatch: 'full' },
    { path: '', component: HomeComponent},
    { path: 'employees', component: EmployeeComponent },
    { path: 'employees/:id', component: EmployeeDetailComponent },
    { path: '**', component: NotfoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 

export class AppRoutingModule {}
