import { Component, OnInit } from '@angular/core';
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

  constructor(router: Router, private http: HttpClient)
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
    this.username = localStorage.getItem('user');
  }

  logout() {
    this.http.post('https://localhost:5001/api/User/Logout', {})
      .subscribe((resultl) => {
        this.routing.navigateByUrl('/login');
      }, error => console.log(error));
  }
}