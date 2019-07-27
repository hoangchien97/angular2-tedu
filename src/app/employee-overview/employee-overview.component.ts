import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-employee-overview',
  template: `
    <h3>Overview Employee</h3>
  `,
  styleUrls: ['./employee-overview.component.scss']
})
export class EmployeeOverviewComponent implements OnInit, OnDestroy {

  public parent_id:number;
  public subscription: Subscription;

  constructor(
    private router: Router, private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.parent.params.subscribe((params)=>{
      this.parent_id = params['id'];
      alert('child get id ' + this.parent_id);
    });
  }

  ngOnDestroy(){

  }
}
