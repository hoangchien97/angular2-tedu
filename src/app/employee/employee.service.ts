import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiURL = "http://5d3c0087552bfb00148e054a.mockapi.io/api/employees/";
  constructor(private _http: Http) {

  }
  getListEmployee(): Observable<any[]> {
    return this._http.get(this.apiURL).map((response: Response) => response.json());
  }
  getDetailEmployee(id: number): Observable<any[]> {
    return this._http.get(this.apiURL + id).map((response: Response) => response.json());
  }
  Update(id: number, data: any): Observable<any[]> {
    return this._http.put(this.apiURL + id, data).map((response: Response) => response.json());
  }
  Create(data: any): Observable<any[]> {
    return this._http.post(this.apiURL, data).map((response: Response) => response.json());
  }
  Delete(id: number): Observable<any[]> {
    return this._http.delete(this.apiURL + id).map((response: Response) => response.json());
  }
}
// viet xog service sang component.ts . su dung service = cach import provider ở trong
// decorator employee.ts
