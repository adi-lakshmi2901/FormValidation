import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './userDetails';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http : HttpClient) { }
  saveUserDetails(data:any){
    return this.http.post('http://localhost:3000/users',data);
  }
  getUserDetails():Observable<IUser[]>{
    return this.http.get<IUser[]>('http://localhost:3000/users');
  }
}
