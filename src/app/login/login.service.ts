import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public _isLoggedIn: boolean;
  
  isLogged(): boolean{
    return this._isLoggedIn;
  }
  setLogin(_isLoggedIn: boolean){
    this._isLoggedIn = _isLoggedIn;
  }
  constructor() { }
}
