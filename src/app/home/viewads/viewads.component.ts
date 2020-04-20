import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../home.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { AdModel } from 'src/app/models/ad';

@Component({
  selector: 'app-viewads',
  templateUrl: './viewads.component.html',
  styleUrls: ['./viewads.component.css']
})
export class ViewadsComponent implements OnInit {

  public ads: Observable<AdModel[]>;

  constructor(public http: HttpClient, public homeSerice: HomeService, public authService: AuthService) { }

  ngOnInit(): void {
    this.ads = this.homeSerice.getAllAds();
  }

  delete(id) {
    this.http.delete<Observable<AdModel[]>>('https://localhost:5001/ads/deleteAd/' + id)
      .subscribe((result) => {
        this.ads = result;
      });
  }
}
