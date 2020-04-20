import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamBuildingModel } from 'src/app/models/teambuilding';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-activeteambuilding',
  templateUrl: './activeteambuilding.component.html',
  styleUrls: ['./activeteambuilding.component.css']
})
export class ActiveteambuildingComponent implements OnInit {

  teambuilds: TeamBuildingModel[];

  constructor(public http: HttpClient, public authService: AuthService) { }

  ngOnInit(): void {
    this.http.get<TeamBuildingModel[]>('https://localhost:5001/team/getActive')
      .subscribe((result) => this.teambuilds = result),
      err => console.log(err);
  }

}
