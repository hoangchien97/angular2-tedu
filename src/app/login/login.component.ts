import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public status: boolean;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {

  }
  checkLogin(value: any) {
    // console.log(value);
    if(value.username == "admin" && value.password=="123456"){
      this.loginService.setLogin(true);
      this.router.navigate(['/']);
    }
    // return this.router.navigate(['/']);
  }
}
