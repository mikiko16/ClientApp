import { HttpClient } from '@angular/common/http';
import { TeamBuildingModel } from './../../../models/teambuilding';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { RegisterModel } from 'src/app/models/register';
import { Observable } from 'rxjs';
import { BsDatepickerModule, BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-createteambuilding',
  templateUrl: './createteambuilding.component.html',
  styleUrls: ['./createteambuilding.component.css']
})
export class CreateteambuildingComponent implements OnInit {
  
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective;
  model: TeamBuildingModel;
  public users: Observable<RegisterModel[]>;

  constructor(public http: HttpClient) { 
    this.model = new TeamBuildingModel("", "", [], [], new Date());
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker.hide();
  }

  change(event) {
    console.log(event.target.value);
  }

  create() {
    let creator = localStorage.getItem('id');
    this.model.CreatorId = creator;
    console.log(this.model);
  }

  getAllUsers() {
    this.http.get<Observable<RegisterModel[]>>('https://localhost:5001/team/AllWithoutAdmin')
      .subscribe((result) => {
      this.users = result;
      });
  }

  invite(id) {
    this.model.Participants.push(id);
  }
}
