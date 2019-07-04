import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RestPasswordService } from './rest-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  passwordShowStatus: boolean = true;

  constructor(
    public resetServ: RestPasswordService,
    private route: ActivatedRoute, 
    private fb: FormBuilder,
    private translateService: TranslateService) {
    translateService.addLangs(['en', 'de']);
    translateService.setDefaultLang('de');
  }

  ngOnInit() {
    this.initForm();

    this.route.params.subscribe(params => {
      this.resetForm.controls.code.setValue(params['code']);
    });
  }

  initForm() {
    this.resetForm = this.fb.group({
      newPassword: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
      code: ''
    });
  }

  get newPassword() {
    return this.resetForm.get('newPassword');
  }

  get confirmPassword() {
    return this.resetForm.get('confirmPassword');
  }


}
