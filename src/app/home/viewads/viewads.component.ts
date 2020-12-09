import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { AdModel } from 'src/app/models/ad';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewads',
  templateUrl: './viewads.component.html',
  styleUrls: ['./viewads.component.css']
})
export class ViewadsComponent implements OnInit {

  ads: Observable<AdModel[]>;

  constructor(public http: HttpClient, 
              public authService: AuthService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: {ads: any}) => {
      this.ads = data.ads
    })
  }

  delete(id) {
    this.http.delete<Observable<AdModel[]>>('https://localhost:5001/ads/deleteAd/' + id)
      .subscribe((result) => {
        this.ads = result;
      });
  }
}
