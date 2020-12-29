import { HttpClient } from '@angular/common/http';
import { TeamBuildingModel } from './../../../models/teambuilding';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { RegisterModel } from 'src/app/models/register';
import { Observable } from 'rxjs';
import { BsDatepickerModule, BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { removeSummaryDuplicates } from '@angular/compiler';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-createteambuilding',
  templateUrl: './createteambuilding.component.html',
  styleUrls: ['./createteambuilding.component.css']
})
export class CreateteambuildingComponent implements OnInit {
  
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective;
  model: TeamBuildingModel;
  public users: Observable<RegisterModel[]>;

  constructor(public http: HttpClient, private router: Router) { 
    this.model = new TeamBuildingModel("", "", [], "");
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
    
    const format = 'yyyy-MM-ddThh:mm:ss';
    const myDate = this.model.Date[1];
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    
    this.model.Date = formattedDate;
    console.log(this.model);
    this.http.post<TeamBuildingModel>('https://localhost:5001/team/create', this.model)
    .subscribe((result) => this.router.navigateByUrl('/teamdetails/' + result.id),
    err => console.log(err))
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
