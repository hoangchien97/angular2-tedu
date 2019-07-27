import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';

// decorator
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  
  public pages:number[];
  public currentPage:number;

  constructor(
    private employeeService: EmployeeService,
    private router: Router, private activatedRoute : ActivatedRoute
    ) { }
  public employees: any[];
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params =>{
      this.currentPage = params['page'] || 1;
      // console.log(this.currentPage);
      // console.log(params['filter']);
    })
    // trả về list danh sách
    this.employeeService.getListEmployee().subscribe((response: any) => {
      this.employees = response;
      // console.log(response);
    },error => {
        console.log(error);
        
    });
    this.pages = [1,2,3,4,5];
  }
}
