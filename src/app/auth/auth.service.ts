import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class AuthService
{
    private currentAuthToken: string;
    private IsAdmin: boolean;
     
    constructor(private http: HttpClient){}

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
}