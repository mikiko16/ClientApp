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
  }

  getNotAvtiveUsers() {
    return this.http.get<RegisterModel[]>('https://localhost:5001/api/User/All');
  }

  approve(id) {
    console.log(`https://localhost:5001/api/User/${id}`);
    this.http.put(`https://localhost:5001/api/User/${id}`, id)
      .subscribe((result) => console.log(result));

    this.users = this.getNotAvtiveUsers();
  }
 }