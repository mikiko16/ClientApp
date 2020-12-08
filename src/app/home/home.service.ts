import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class HomeService
{
    //baseUrl: string = '';
    //ads: any;
     
    constructor(private http: HttpClient) {
        //this.baseUrl = "https://localhost:5001";
    }

    private adsEndPoint = 'https://localhost:5001/ads/getAllAds';

    getAllAds() {
      //this.http.get('https://localhost:5001/ads/getAllAds')
    // .subscribe((result) => this.ads = result,
     // err => console.log(err));
      
      return this.http.get(this.adsEndPoint);
    }
}