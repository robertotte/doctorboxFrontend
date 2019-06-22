import { Component, OnInit } from '@angular/core';
import { restForm } from './rest-password.form';
import { RestPasswordService } from '../rest-password.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  RestForm: FormGroup;
  passwordShowStatus: boolean = true;

  constructor(
    public resetForm: restForm,
    private resetServ: RestPasswordService,
    private route: ActivatedRoute,
    private translateService: TranslateService
  ) {
    translateService.addLangs(['en', 'de']);
    translateService.setDefaultLang('de');
  }

  ngOnInit() {
    this.RestForm = this.resetForm.initForm();

    this.route.params.subscribe(params => {
      this.resetForm.rest.controls.code.setValue(params['code']);
    });
  }

  resetPassword() {
    this.resetServ.restPassword(this.RestForm);
  }

  switchLanguage(language: string) {
    // console.log(language);
    this.translateService.use(language);
  }




}
