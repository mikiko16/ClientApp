import { Component, OnInit } from '@angular/core';
import { Thing } from 'src/app/models/things';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from 'src/app/models/register';

@Component({
  selector: 'app-teambuildingdetails',
  templateUrl: './teambuildingdetails.component.html',
  styleUrls: ['./teambuildingdetails.component.css']
})
export class TeambuildingdetailsComponent implements OnInit {

  model: Thing;
  public things: Observable<Thing[]>;
  private routeSub: Subscription;
  id: string;
  users: RegisterModel[];

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { 
    this.model = new Thing("");
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params): void => {
      this.id = params['id'];
    });
    
    this.http.get<RegisterModel[]>('https://localhost:5001/team/AllWithoutAdmin')
      .subscribe((result) => {this.users = result});
  }

  create(userId) {
    this.model.TeamBuildingId = this.id;
    this.model.UserAppId = userId;
    console.log(this.model);

    this.http.post<Observable<Thing[]>>('https://localhost:5001/team/createThing', this.model)
    .subscribe((result) => this.things = result);
  }
}
