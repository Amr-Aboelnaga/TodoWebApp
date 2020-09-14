import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin'
  password = ''
  errorMessage = "Invalid Login Credentials"
  invalidLogin = false

  constructor(private router: Router, private basicAuthenticationService: BasicAuthenticationService) {


  }

  ngOnInit(): void {
  }
  signup(): void {
    this.router.navigate(['signup'])
  }
  handleJWTAuthLogin(): void {

    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username]);
        },
        error => {
          this.invalidLogin = true
        }
      )


  }


}
