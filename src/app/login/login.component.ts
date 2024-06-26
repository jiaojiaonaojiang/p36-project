import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    if (this.email === '' || this.password === '') {
      this.errorMessage= 'Email and password are required';
      return;
    }

    const saveReq = {
      email: this.email,
      password: this.password
    };

    this.http.post("http://127.0.0.1:9088/api/form/login", saveReq, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),responseType: 'text'
    }).subscribe(
      (rep: any) => {
        if (rep == "academic user") {
          this.router.navigate(['/ac_home']);
        } else if (rep == "student"){
          this.router.navigate(['/st_home']);
        } else if (rep == "admin") {
          this.router.navigate(['/ad_home']);
        } else {
          this.errorMessage = rep;
          console.log(this.errorMessage);
        }
      }
    );
  }
}
