import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationBean } from '../entities/authenticationBean';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeJWTAuthenticationService(username, password) {

    return this.http.post<any>(`https://limitless-oasis-30668.herokuapp.com/authenticate`, { username, password }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username)
          sessionStorage.setItem('token', `Bearer ${data.token}`)

          return data;
        }
      )
    );
  }


  createBasicAutenthicationHttpHeader(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);
    return basicAuthHeaderString;


  }
  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser')
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem('token')
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }
  logout() {
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')

  }
}
