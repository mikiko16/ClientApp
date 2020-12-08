import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { empty } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HomeService } from './home.service';

@Injectable({
    providedIn: 'root'
})

export class ResolveService implements Resolve<any>{
  constructor(private homeService: HomeService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.homeService.getAllAds().pipe(
            catchError((error) => {
                return empty();
            })
        )
    }
}