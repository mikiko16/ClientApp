import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/login';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../../models/register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  model: LoginModel;
  baseUrl: string;
  router: Router;

  constructor(private http: HttpClient, router: Router) {
    this.model = new LoginModel("", "");
    //this.baseUrl = baseUrls;
    this.router = router;
  }

  ngOnInit() {
  }

  login() {
    this.http.post('https://localhost:5001/api/User/Login', this.model)
      .subscribe((result) => {
        console.log(localStorage.getItem('authtoken'));
        this.router.navigateByUrl('');
      }, error => console.error(error.error));
  }
}