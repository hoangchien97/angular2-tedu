import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'util';

// decorator
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  public id: number;
  public pages: number[];
  public currentPage: number;
  public txtSearch: string;

  constructor(
    private employeeService: EmployeeService,
    private router: Router, private activatedRoute: ActivatedRoute
  ) { }
  public employees: any[];
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentPage = params['page'] || 1;
      // console.log(this.currentPage);
      // console.log(params['filter']);
    })
    // trả về list danh sách
    this.loadData();
    this.pages = [1, 2, 3, 4, 5];
  }

  loadData() {
    this.employeeService.getListEmployee().subscribe((response: any) => {
      this.employees = response;
      // console.log(response);
    }, error => {
      console.log(error);
    });
  }

  delEmployee(id: number) {
    let confirmResult = confirm("Are you sure to delete employee ?");
    if (confirmResult == true) {
      this.employeeService.Delete(id).subscribe(response => {
        if (response) {
          alert("Delete success");
          this.loadData();
        }
      })
    }
  }

  Search(){
    this.employeeService.Search(this.txtSearch).subscribe((response) => {
      this.employees = response;
    },error => {
      console.log(error);
      
    })
  }
}
