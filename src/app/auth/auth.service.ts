import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService
{
    private currentAuthToken: string;
    private IsAdmin: boolean;
    baseUrl: string = '';
     
    constructor(private http: HttpClient) {
        this.baseUrl = "https://localhost:5001";
    }

    checkIfLoggedIn() {        
        return this.currentAuthToken === localStorage.getItem('authtoken');
    }

    isAdmin() {
        let isAdmin = localStorage.getItem('isAdmin');
        
        if(isAdmin == 'true'){
            return true;
        }

        return false;
    }

    get authtoken() {
        return this.currentAuthToken
    }

    set authtoken(value: string) {
        this.currentAuthToken = value; 
    }

    get admin() {
        return this.IsAdmin
    }

    set admin(value: boolean) {
        this.IsAdmin = value; 
    }

    facebookLogin(accessToken:string) {
        let body = JSON.stringify({ accessToken });  
        
        return this.http
          .post(
          this.baseUrl + '/externalauth/facebook', body)
          .subscribe((result) => console.log(result))
      }
}