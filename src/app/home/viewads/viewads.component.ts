import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewads',
  templateUrl: './viewads.component.html',
  styleUrls: ['./viewads.component.css']
})
export class ViewadsComponent implements OnInit {

  ads: any;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/ads/getAllAds')
    .subscribe((result) => this.ads = result,
    err => console.log(err));
  }
}
