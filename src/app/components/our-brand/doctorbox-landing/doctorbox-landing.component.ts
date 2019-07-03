import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-doctorbox-landing',
  templateUrl: './doctorbox-landing.component.html',
  styleUrls: ['./doctorbox-landing.component.css']
})
export class DoctorboxLandingComponent implements OnInit {

  eng: any;
  germen: any;

  constructor(private translateService: TranslateService) {
    translateService.addLangs(['en', 'de']);
    translateService.setDefaultLang('de');
  }

  ngOnInit() {
  }



  onChangeEnglish(event: any) {
   this.eng = event;
    console.log(event.login.title);



  }

  onChangeGermen(event: any) {
  this.germen= event;
    console.log(event);



  }

}
