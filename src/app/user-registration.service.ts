import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './userDetails';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  url:string='http://localhost:3000/users';
  constructor(private http : HttpClient) { }
  saveUserDetails(data:any){
    return this.http.post(this.url,data);
  }
  getUserDetails():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url);
  }
}

