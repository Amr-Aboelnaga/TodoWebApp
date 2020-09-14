import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username = 'admin'
  password = ''
  confirmedPassword = ''
  errorMessage = "Username already taken"
  invalidLogin = false
  constructor(private router: Router, private signupService: SignupService) { }

  ngOnInit(): void {
  }
  signup() {
    if (this.password && this.confirmedPassword && this.password == this.confirmedPassword) {
      this.signupService.postSignup(this.username, this.password)
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
}
