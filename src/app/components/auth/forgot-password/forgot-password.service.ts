import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ForgotForm } from 'src/app/core/modals/forgot.form';
import { swalMessages, apiHeader } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  constants: any;
  constructor(private swalMessages: swalMessages,
    private http: HttpClient, private forgotForm: ForgotForm) {
    this.getConstants()
  }

  forgetPassword() {
    if (this.forgotForm.forgotForm.valid) {
      this.http.post(apiHeader + 'user/forget_password/', this.forgotForm.forgotForm.value).subscribe(
        (response) => {
          this.swalMessages.successAlert(this.constants.forgotPassword.accountActiveTitle, this.constants.forgotPassword.accountActiveMsg);
        },
        (error) => {
          if (error.status == 404) {
            this.swalMessages.errorAlert(this.constants.forgotPassword.invalidEmailTitle, this.constants.forgotPassword.invalidEmailMsg);
          }
          else if (error.status == 400) {
            this.swalMessages.errorAlert(this.constants.forgotPassword.accountNotActiveTitle, this.constants.forgotPassword.accountNotActiveMsg);
          }
          else {
            this.swalMessages.errorAlert(this.constants.commonErrors.internalErrorTitle, this.constants.commonErrors.internalErrorMsg);
          }
        });
    }
    else {
      this.swalMessages.warningAlert(this.constants.formErrors.invalidFormTitle, this.constants.formErrors.invalidFormMsg);
    }

  }

  changePassword(pass1: any, pass2: any, code: any) {
    return this.http.put(apiHeader + 'change_password/',
      JSON.stringify({
        "pass1": pass1,
        "pass2": pass2,
        "code": code
      }));
  }


  getConstants() {

    return this.http.get('../assets/i18n/en.json').subscribe(data => {
      this.constants = data;

    });


  }

}
