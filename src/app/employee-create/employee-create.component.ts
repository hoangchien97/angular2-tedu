import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee/employee.service';



@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  public employee:any;

  constructor(
    private router:Router, private activatedRoute: ActivatedRoute,
    public employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employee = {};
  }

  GoToEmployee(){
    this.router.navigate(['employees']);
  }

  createEmployee(){
    this.employeeService.Create(this.employee).subscribe(response => {
      if(response){
        alert("Create new success !!!");
        this.GoToEmployee();
      }
    })
  }


}
