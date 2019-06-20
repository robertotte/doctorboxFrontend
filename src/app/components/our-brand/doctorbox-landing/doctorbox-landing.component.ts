import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-doctorbox-landing',
  templateUrl: './doctorbox-landing.component.html',
  styleUrls: ['./doctorbox-landing.component.css']
})
export class DoctorboxLandingComponent implements OnInit {

  constructor( private translateService: TranslateService) {
    translateService.addLangs(['en', 'de']);
    translateService.setDefaultLang('de');

   }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }

}
