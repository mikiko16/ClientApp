import { Component, OnInit } from '@angular/core';
import { AdModel } from 'src/app/models/ad';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {

  imageUrl: string = "/assets/img/download.jfif";
  model: AdModel;
  fileToUpload: File = null;
  formData: FormData = new FormData();
  picId: string;

  constructor(public http: HttpClient, public router: Router) {
    this.model = new AdModel("", "", "");
   }

  ngOnInit(): void {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    this.formData.append('Image', this.fileToUpload, this.fileToUpload.name);

    this.http.post('https://localhost:5001/images/uploadImage', this.formData, {responseType: 'text'})
      .subscribe((result) => this.model.Link = result,
      err => console.log(err));
  }

  create() {      
    console.log(this.formData);

    this.http.post('https://localhost:5001/ads/createAd', this.model)
      .subscribe((result) => this.router.navigateByUrl('/'),
      err => console.log(err));  
  }
}
