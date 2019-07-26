import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

// decorator
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  public employees: any[];
  ngOnInit() {
    this.employeeService.getListEmployee().subscribe((response: any) => {
      this.employees = response;
    })
  }

}
