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
import { ActiveteambuildingComponent } from './teambuilding/activeteambuilding/activeteambuilding.component';
import { PastteambuildingComponent } from './teambuilding/pastteambuilding/pastteambuilding.component';
import { ViewteambuildingComponent } from './teambuilding/viewteambuilding/viewteambuilding.component';
import { ViewactiveteambuildingComponent } from './teambuilding/viewactiveteambuilding/viewactiveteambuilding.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'teambuilding', component: TeambuildingComponent},
  {path: 'create', component: CreateteambuildingComponent},
  {path: 'teamdetails/:id', component: TeambuildingdetailsComponent},
  {path: 'facebook-login', component: FacebookComponent},
  {path: 'createAd', component: AdComponent},
  {path: 'activeteambuilding', component: ActiveteambuildingComponent},
  {path: 'pasedteambuilding', component: PastteambuildingComponent},
  {path: 'viewteambuilding/:id', component: ViewteambuildingComponent},
  {path: 'viewactiveteambuilding/:id', component: ViewactiveteambuildingComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
