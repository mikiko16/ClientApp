import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { TeamBuildingModel } from 'src/app/models/teambuilding';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-viewteambuilding',
  templateUrl: './viewteambuilding.component.html',
  styleUrls: ['./viewteambuilding.component.css']
})
export class ViewteambuildingComponent implements OnInit {

  id: string;
  pics: Observable<string>;
  teambuilds: TeamBuildingModel[];
  imageUrl: string = "/assets/img/download.jfif";
  model: TeamBuildingModel;
  fileToUpload: File = null;
  formData: FormData = new FormData();
  picId: string;
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, public authService: AuthService) {}

   ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params): void => {
      this.id = params['id'];
    })};

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    this.formData.append('Image', this.fileToUpload, this.fileToUpload.name);
    this.formData.append('Id', this.id);

    this.http.post('https://localhost:5001/images/uploadImage', this.formData, {responseType: 'text'})
      .subscribe((result) => console.log(result),
      err => console.log(err));
  }

  create() {      
    this.http.post('https://localhost:5001/ads/createAd', this.model);
  }

  Upload() {
    console.log('I am here !')
  }
}
