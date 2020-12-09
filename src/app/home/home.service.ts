import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class HomeService
{     
    constructor(private http: HttpClient) {}

    private adsEndPoint = 'https://localhost:5001/ads/getAllAds';

    getAllAds() {      
      return this.http.get(this.adsEndPoint);
    }
}