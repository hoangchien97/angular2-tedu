import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template : `
    <p>This is home component</p>
    <button (click)=GotoEmployees()>Go to Employees</button>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  
  GotoEmployees(){
    this.router.navigate(['employees']);
  }

  ngOnInit() {
  }

}
