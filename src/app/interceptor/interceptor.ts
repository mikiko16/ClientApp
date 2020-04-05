import { AuthService } from './../auth/auth.service';
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

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    
    constructor(private router: Router,
    private toastr: ToastrService,
    public authService: AuthService){}

    intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>>{

    if(request.url.endsWith('Login')){
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            }
        })
    }
    else{
        request = request.clone({
           setHeaders: {
            'Authorization': `Bearer ${localStorage.getItem('authtoken')}`,
            'Content-Type': 'application/json'
            }
        })
    }
    return next.handle(request)
        .pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse && request.url.endsWith('Login')){
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
                    this.toastr.error(err.error.errors[0].description,"Warning !")
                break;
                case 404:
                    this.toastr.error(err.error.errors[0].description,"Warning !")
                break;
                case 405:
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
        this.authService.authtoken = data['auth_token'];
        localStorage.setItem('authtoken', data['auth_token']);
        localStorage.setItem('username', data['username']);
        localStorage.setItem('id', data['id']);
        if (data['IsAdmin'] === true){
            this.authService.admin = true;
        }
        else{
            this.authService.admin = false;
        }
        this.router.navigate(['/home']);
        this.toastr.success("Logged in successful")
      }
}