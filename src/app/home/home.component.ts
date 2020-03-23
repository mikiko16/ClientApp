import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../models/register';
import { Observable } from 'rxjs';
import { AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public username: String;
  users: Observable<RegisterModel[]>;
  @Input() model: Array<RegisterModel>; 

  constructor(private http: HttpClient, public authService: AuthService) {
  }

  ngOnInit() {
    if(this.authService.admin){
      console.log('I am Admin !');
      this.getAllUsers();
    }
  }

  getAllUsers() {
    this.http.get<Observable<RegisterModel[]>>('https://localhost:5001/api/User/AllFromCompany')
      .subscribe((result) => {
      console.log(result);
      this.users = result;
      }, error => console.error(error.error));
  }
 }