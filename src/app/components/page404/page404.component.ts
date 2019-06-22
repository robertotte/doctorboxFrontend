import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {

  constructor( private translateService: TranslateService) { 

    translateService.addLangs(['en', 'de']);
    translateService.setDefaultLang('de');
  }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
