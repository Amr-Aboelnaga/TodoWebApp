import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  postSignup(username: string, password: string) {
    return this.http.post(`https://limitless-oasis-30668.herokuapp.com/signup`, { username, password })
  }
}
