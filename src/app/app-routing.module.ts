import { TeambuildingComponent } from './teambuilding/teambuilding/teambuilding.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, Route,  RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateteambuildingComponent } from './teambuilding/create/createteambuilding/createteambuilding.component';
import { TeambuildingdetailsComponent } from './teambuilding/teambuildingdetails/teambuildingdetails.component';
import { FacebookComponent } from './auth/facebook/facebook.component';
import { AdComponent } from './home/ad/ad.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'teambuilding', component: TeambuildingComponent},
  {path: 'create', component: CreateteambuildingComponent},
  {path: 'teamdetails/:id', component: TeambuildingdetailsComponent},
  {path: 'facebook-login', component: FacebookComponent},
  {path: 'createAd', component: AdComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
