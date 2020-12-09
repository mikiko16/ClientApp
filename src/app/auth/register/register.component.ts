import { Component, OnInit, Injectable } from '@angular/core';
import { RegisterModel } from '../../models/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

@Injectable()
export class RegisterComponent implements OnInit {
  model: RegisterModel;
  baseUrl: string;
  router: Router;

  constructor(private http: HttpClient, router: Router) {
    this.model = new RegisterModel("", "", "", "", "", false, false);
    this.router = router;
  }

  ngOnInit() {
  }

  submit() {
    this.http.post('https://localhost:5001/api/User/Register', this.model)
      .subscribe((result: RegisterModel) => {
        this.router.navigateByUrl('/login');
      }, error => console.log(error));
  }
}