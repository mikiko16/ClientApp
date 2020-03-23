import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/Login';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{

  isExpanded = false;
  username: String;
  routing: Router; 
  //public currentAuthToken : string;

  constructor(router: Router, private http: HttpClient, public authService: AuthService)
  {
    this.routing = router;
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
    console.log('I am here');
  }

  logout() {
    this.http.post('https://localhost:5001/api/User/Logout', {})
      .subscribe((result) => {
        localStorage.clear();
        this.authService.authtoken = '';
        this.authService.admin = false;
        this.routing.navigateByUrl('/');
      }, error => console.log(error));
  }
}