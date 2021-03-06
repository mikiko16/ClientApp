import { NavMenuComponent } from './../../nav-menu/nav-menu.component';
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/login';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient, router: Router, public navComponent: NavMenuComponent) {
    this.model = new LoginModel("", "");
    this.router = router;
  }

  ngOnInit() {
  }

  login() {
    this.http.post('https://localhost:5001/api/User/Login', this.model)
      .subscribe((result) => {
        this.router.navigateByUrl('');
    }, error => console.error(error.error));
  }
}