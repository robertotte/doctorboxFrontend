import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AccountModalService } from 'src/app/core/services/account-modal.service';

@Component({
  selector: 'app-our-brand',
  templateUrl: './our-brand.component.html',
  styleUrls: ['./our-brand.component.css']
})
export class OurBrandComponent implements OnInit {

  langugae: Boolean = true;
  constructor(private accountModal: AccountModalService, private translateService: TranslateService) { 

    translateService.addLangs(['en', 'de']);
    translateService.setDefaultLang('de');
  }

  ngOnInit() {
  }
}
