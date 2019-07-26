import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit,OnDestroy {


  public _id:number;
  public subcription:Subscription;
  public employee:any;

  constructor(
    private router:Router, private activedRoute: ActivatedRoute,
    public employeeService: EmployeeService  
  ) { 

  }

  ngOnInit() {
    this.subcription = this.activedRoute.params.subscribe(params => {
      this._id = params['id'];
      // alert(this._id);
    })

    this.employeeService.getDetailEmployee(this._id).subscribe((data)=>{
      this.employee = data;
    })
  }

  GoToEmployeeDetail(){
    this.router.navigate(["employees"]);
  }

  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

}
