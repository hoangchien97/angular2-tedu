import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiURL = "http://5d398542fa091c0014470333.mockapi.io/api/employees";
  constructor(private _http:Http) {

  }
  getListEmployee():Observable<any []>{
    return this._http.get(this.apiURL).map((response: Response) => response.json())
  }
  
}
// viet xog service sang component.ts . su dung service = cach import provider ở trong
// decorator employee.ts
