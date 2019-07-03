import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AccountModalService } from 'src/app/core/services/account-modal.service';
declare const $: any;

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})

export class SubHeaderComponent implements OnInit {
  english: any;
  germen: any;


  constructor(private translateService: TranslateService, private http: HttpClient ,
    private accountModal: AccountModalService) {
    translateService.addLangs(['en', 'de']);
    translateService.setDefaultLang('de');
  }

  ngOnInit() {
  }
  
 
  switchLanguage(language: string) {
    this.accountModal.setModal(language);
    this.accountModal.emitModalCalled();
    // this.translateService.use(language);
    this.showForm();
    this.translateService.use(language);


  }

  showForm() {
    $('#exampleModal').modal();
  }

  // getEngConstants() {

  //   return this.http.get('../assets/i18n/en.json').subscribe(data => {
  //     this.english = data;
  //     this.engLng.emit(this.english);
  //   });


  // }

  // getGemConstants() {

  //   return this.http.get('../assets/i18n/de.json').subscribe(data => {
  //     this.germen = data;
  //     this.gerLng.emit(this.germen);

  //   });


  // }

}
