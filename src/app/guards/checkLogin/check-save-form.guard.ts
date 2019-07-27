import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeDetailComponent } from 'src/app/employee-detail/employee-detail.component';

@Injectable({
  providedIn: 'root'
})
export class CheckSaveFormGuard implements CanDeactivate<EmployeeDetailComponent> {
  canDeactivate(component: EmployeeDetailComponent){
    alert("You can not leave this page without saving data");
    return false;
  }
}
