import { Component, OnInit } from '@angular/core';
import { TeamBuildingModel } from 'src/app/models/teambuilding';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-pastteambuilding',
  templateUrl: './pastteambuilding.component.html',
  styleUrls: ['./pastteambuilding.component.css']
})
export class PastteambuildingComponent implements OnInit {

  teambuilds: TeamBuildingModel[];
  
  constructor(public http: HttpClient, public authService: AuthService) { }

  ngOnInit(): void {
    this.http.get<TeamBuildingModel[]>('https://localhost:5001/team/getPast')
      .subscribe((result) => this.teambuilds = result),
      err => console.log(err);
  }
}
