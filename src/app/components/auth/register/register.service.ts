import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface User {
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  token: String
}
let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:5000/api/users/register'
  constructor(private http: HttpClient) { }
  Register(inputs:any) {
    const body = {
      ...inputs,
      firstName : inputs.fullName.split(' ')[0],
      lastName : inputs.fullName.split(' ')[1],
    }
    return this.http.post(this.apiUrl,body, { headers })
  }
} 