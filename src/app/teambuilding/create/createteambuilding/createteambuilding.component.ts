import { HttpClient } from '@angular/common/http';
import { TeamBuildingModel } from './../../../models/teambuilding';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { RegisterModel } from 'src/app/models/register';
import { Observable } from 'rxjs';
import { BsDatepickerModule, BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { removeSummaryDuplicates } from '@angular/compiler';

@Component({
  selector: 'app-createteambuilding',
  templateUrl: './createteambuilding.component.html',
  styleUrls: ['./createteambuilding.component.css']
})
export class CreateteambuildingComponent implements OnInit {
  
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective;
  model: TeamBuildingModel;
  public users: Observable<RegisterModel[]>;
  
  public mySentences:Array<string> = [
    'Sentence 1',
    'Sentence 2',
    'Sentence 3',
    'Sentence 4' ,
];

  constructor(public http: HttpClient, private router: Router) { 
    this.model = new TeamBuildingModel("", "", [], new Date);
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker.hide();
  }

  create() {
    let creator = localStorage.getItem('id');
    this.model.CreatorId = creator;
    this.model.Date = this.model.Date[1];
    console.log(this.model);
    this.http.post<TeamBuildingModel>('https://localhost:5001/team/create', this.model)
    .subscribe((result) => this.router.navigateByUrl('/teamdetails/' + result.id));

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
