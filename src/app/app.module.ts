import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptor } from './interceptor/interceptor';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { TeambuildingComponent } from './teambuilding/teambuilding/teambuilding.component'
import { AuthService } from './auth/auth.service';
import { CreateteambuildingComponent } from './teambuilding/create/createteambuilding/createteambuilding.component';
import { TeambuildingdetailsComponent } from './teambuilding/teambuildingdetails/teambuildingdetails.component';

export const BASE_URL = new InjectionToken<string>('BASE_URL');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavMenuComponent,
    HomeComponent,
    TeambuildingComponent,
    CreateteambuildingComponent,
    TeambuildingdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [AuthService, NavMenuComponent, { provide: BASE_URL , useValue: "https://localhost:5001/" },
  {
    provide: HTTP_INTERCEPTORS,      
    useClass: TokenInterceptor,      
    multi: true   
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
