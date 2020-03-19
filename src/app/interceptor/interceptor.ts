import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { tap  } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

const appKey = "kid_S1mIOIlIX";
const appSecret = "2824c8a8370146019a5b1e7a8aeab874"

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    
    constructor(private router: Router,
    private toastr: ToastrService){}

    intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>>{

    if(request.url.endsWith('login') || request.url.endsWith(appKey)){
        console.log('Miro is the best 1');
        request = request.clone({
            setHeaders: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
       }
        })
    }
    else{
        console.log('Miro is the best !!');
        request = request.clone({
           setHeaders: {
                'Content-Type': 'application/json'
            }
        })
    }
    return next.handle(request)
        .pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse && request.url.endsWith('login')){
                this.successfulLogin(event.body)
            }
        },
        (err: any) => {
        if(err instanceof HttpErrorResponse){
            switch(err.status){
                case 401:
                    this.toastr.error(err.error.errors[0].description,"Warning !")
                break;
                case 400:
                console.log(err.error.errors[0].description);
                this.toastr.error(err.error.errors[0].description,"Warning !")
                break;
                case 404:
                this.toastr.error(err.error.errors[0].description,"Warning !")
                break;
                case 409:
                this.toastr.error(err.error.errors[0].description,"Warning !")
                break;
                case 500:
                this.toastr.error(err.error.errors[0].description,"Warning !")
                break;
            }
            return throwError(err);
        }
    }))
    }

    private successfulLogin(data) {
        //this.authService.authtoken = data['_kmd']['authtoken'];
        localStorage.setItem('authtoken', data['_kmd']['authtoken']);
        localStorage.setItem('username', data['username']);
        localStorage.setItem('id', data['_id']);
        this.router.navigate(['/home']);
        this.toastr.success("Logged in successful")
      }
}