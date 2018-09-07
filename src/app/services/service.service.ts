import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  
  addUser(user: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/addUser", user);
   
  }
}

