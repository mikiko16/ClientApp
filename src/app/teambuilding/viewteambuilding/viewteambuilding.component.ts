import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { TeamBuildingModel } from 'src/app/models/teambuilding';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Picture } from 'src/app/models/picture';

@Component({
  selector: 'app-viewteambuilding',
  templateUrl: './viewteambuilding.component.html',
  styleUrls: ['./viewteambuilding.component.css']
})
export class ViewteambuildingComponent implements OnInit {

  id: string;
  pics: Observable<Picture[]>;
  imageUrl: string = "/assets/img/download.jfif";
  fileToUpload: File = null;
  formData: FormData = new FormData();
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, public authService: AuthService) {}

   ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params): void => {
      this.id = params['id'];
    })

    this.http.get<Observable<Picture[]>>('https://localhost:5001/team/getPicsById/' + this.id)
      .subscribe((result) => this.pics = result,
      err => {
        return console.log(err);
      });
  };

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    this.formData.append('Image', this.fileToUpload, this.fileToUpload.name);
    this.formData.append('Id', this.id);

    this.http.post<Observable<Picture[]>>('https://localhost:5001/images/uploadTeamImage', this.formData)
      .subscribe((result) => this.pics = result,
      err => {
        return console.log(err);
      });

    this.fileToUpload = null;
  }
}
