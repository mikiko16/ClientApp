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

  public isEmpty: boolean;
  ads: any;
  public username: String;
  public users: Observable<RegisterModel[]>;
  public obs: Array<RegisterModel[]>;
  @Input() model: Array<RegisterModel>; 

  constructor(private http: HttpClient, public authService: AuthService) {
  }

  ngOnInit() {
    if(this.authService.admin) {
      this.getAllUsers();
    }
    
    this.http.get('https://localhost:5001/ads/getAllAds')
      .subscribe((result) => this.ads = result,
      err => console.log(err));
  }

  getAllUsers() {
    this.http.get<Observable<RegisterModel[]>>('https://localhost:5001/api/User/AllFromCompany')
      .subscribe((result) => {
      this.users = result
      });
  }

  accept(id) {
    this.http.put<Observable<RegisterModel[]>>('https://localhost:5001/api/user/update/' + id, id)
      .subscribe((result) => {
        this.users = result;  
      });
  }

  delete(id) {
    this.http.delete<Observable<RegisterModel[]>>('https://localhost:5001/api/user/delete/' + id)
      .subscribe((result) => {
        this.users = result;
      });
  }
 }