import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Thing } from 'src/app/models/things';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teambuilding',
  templateUrl: './teambuilding.component.html',
  styleUrls: ['./teambuilding.component.css']
})
export class TeambuildingComponent implements OnInit {

  model: Thing;
  @Input() id;
  @Input() user;
  @Input() teambId;
  public things: Observable<Thing[]>;

  constructor(private http: HttpClient) { 
    this.model = new Thing("");
  }

  ngOnInit(): void {
  }

  create() {
    this.model.UserAppId = this.id;
    this.model.TeamBuildingId = this.teambId;
    console.log(this.model);
    this.http.post<Observable<Thing[]>>("https://localhost:5001/things/createThing", this.model) 
    .subscribe((result) => this.things = result); 
  }
}
