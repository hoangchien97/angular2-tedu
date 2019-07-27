import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { EmployeeService } from "./../employee/employee.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-employee-update",
  templateUrl: "./employee-update.component.html",
  styleUrls: ["./employee-update.component.scss"]
})
export class EmployeeUpdateComponent implements OnInit {
  public id: number;
  public employee: any;
  public subscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public employeeService: EmployeeService
  ) {}

  ngOnInit() {
    // get id
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.id = params["id"];
    });

    // get data dua vao id
    this.employeeService.getDetailEmployee(this.id).subscribe(data => {
      this.employee = data;
    });
  }

  GoToEmployee() {
    this.router.navigate(["employees"]);
  }

  SaveForm() {
    this.employeeService.Update(this.id, this.employee).subscribe(response => {
      if (response) {
        alert("save success");
        this.GoToEmployee();
      }
    });
  }
}
