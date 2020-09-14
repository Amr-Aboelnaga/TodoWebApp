import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username = ""
  constructor(private router: Router, public basicAuthenticationService: BasicAuthenticationService) {

  }

  ngOnInit(): void {
    console.log("called")
    this.username = this.basicAuthenticationService.getAuthenticatedUser()
  }
  routeToWelcome(): void {
    this.router.navigate(['welcome', this.basicAuthenticationService.getAuthenticatedUser()]);
  }
  routeToTodos(): void {
    this.router.navigate(['todos', this.basicAuthenticationService.getAuthenticatedUser()]);
  }

}
