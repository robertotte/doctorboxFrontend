import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctorbox-landing',
  templateUrl: './doctorbox-landing.component.html',
  styleUrls: ['./doctorbox-landing.component.css']
})
export class DoctorboxLandingComponent implements OnInit {
  constants: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getConstants();
  }


  getConstants() {

    return this.http.get('../assets/i18n/en.json').subscribe( data => {
       this.constants = data;
    });


 }

}
