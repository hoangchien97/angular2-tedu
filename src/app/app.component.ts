import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  public isLoggedIn : boolean;
  title = 'angular-form';
  constructor(private loginService: LoginService){

  }
  logOut(){
    this.loginService.setLogin(false);
    alert('Logged out !');
  }
}
