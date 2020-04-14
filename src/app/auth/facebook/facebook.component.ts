import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent {

  private authWindow: Window;
  failed: boolean;
  error: string;
  errorDescription: string;
  isRequesting: boolean; 

  launchFbLogin() {
    this.authWindow = window.open('https://www.facebook.com/v2.11/dialog/oauth?&response_type=token&display=popup&client_id=206111983930454&display=popup&redirect_uri=http://localhost:4200/facebook-auth.html&scope=email',null,'width=600,height=400');    
  }

  constructor(private userService: AuthService, public router: Router) {
    if (window.addEventListener) {
      window.addEventListener("message", this.handleMessage.bind(this), false);
    } else {
       (<any>window).attachEvent("onmessage", this.handleMessage.bind(this));
    } 
  } 

  handleMessage(event: Event) {
    const message = event as MessageEvent;
    // Only trust messages from the below origin.
    if (message.origin !== "http://localhost:4200") return;

    this.authWindow.close();

    const result = JSON.parse(message.data);
    if (!result.status)
    {
      this.failed = true;
      this.error = result.error;
      this.errorDescription = result.errorDescription;
    }
    else
    {
      this.failed = false;
      this.isRequesting = true;

      this.userService.facebookLogin(result.accessToken)

      this.router.navigateByUrl('/');
      //  .finally(() => this.isRequesting = false)
     //   .subscribe(
     //   result => {
     //     if (result) {
     //       console.log(result);
            //this.router.navigate(['/dashboard/home']);
     //     }
    //    },
     //   error => {
      //    this.failed = true;
     //     this.error = error;
     //   });      
    }
  }
}