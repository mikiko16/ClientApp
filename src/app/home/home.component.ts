import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../models/register';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public username: String;
  users: Observable<RegisterModel[]>;
  @Input() model: Array<RegisterModel>; 

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('user');

    this.http.get('https://localhost:5001/api/User/All')
    .subscribe((result) => {
      console.log(result);
    }, error => console.error(error.error));
  }

  getNotAvtiveUsers() {
    return this.http.get<RegisterModel[]>('https://localhost:5001/api/User/All');
  }
 }