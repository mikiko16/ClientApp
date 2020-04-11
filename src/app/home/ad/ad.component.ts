import { Component, OnInit } from '@angular/core';
import { AdModel } from 'src/app/models/ad';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {

  imageUrl: string = "/assets/img/download.jfif";
  model: AdModel;
  fileToUpload: File = null;

  constructor(public http: HttpClient) {
    this.model = new AdModel("", "");
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

    const formData: FormData = new FormData();

    formData.append('Image', this.fileToUpload, this.fileToUpload.name);
    formData.append('ImageCaption', 'Miro')

    this.http.post('https://localhost:5001/things/uploadImage', formData)
      .subscribe((result) => console.log(result));
  }

  OnSubmit() {
    console.log('Miro is the best ')
  }

  create() {

  }
}
