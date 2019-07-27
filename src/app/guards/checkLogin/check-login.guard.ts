import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate} from '@angular/router'
import { LoginService } from './../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  
  constructor(private loginSerice: LoginService){

  }
  canActivate(){
    let status = this.loginSerice.isLogged();
    if(status == false){
      alert("a");
    }
    return status;
  }
}
