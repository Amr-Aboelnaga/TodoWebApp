import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HelloWorldBean } from 'src/app/entities/helloWorldBean';
import { BasicAuthenticationService } from '../basic-authentication.service';
@Injectable({
  providedIn: 'root'
})


export class WelcomeDataService {

  constructor(private http: HttpClient, private BasicAuthService: BasicAuthenticationService) { }


  executeHelloWorldBeanService(name: string) {
    // // let basicAuthHeaderString = this.BasicAuthService.createBasicAutenthicationHttpHeader();
    // let headers = new HttpHeaders(
    //   {
    //     Authorization: basicAuthHeaderString
    //   }
    // );
    // console.log(headers);

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-bean/${name}`);
  }


}
