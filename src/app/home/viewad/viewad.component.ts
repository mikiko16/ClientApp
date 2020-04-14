import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewad',
  templateUrl: './viewad.component.html',
  styleUrls: ['./viewad.component.css']
})
export class ViewadComponent implements OnInit {

  @Input() ad;

  constructor(public http: HttpClient) { }

  ngOnInit(): void { 
  }

}
