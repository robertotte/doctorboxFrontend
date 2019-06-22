import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiHeader, swalMessages } from '../../../constants';
import { forgotForm } from 'src/app/core/modals/forgot.form';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private swalMessages: swalMessages, private http: HttpClient, private forgotForm: forgotForm) { }

  forgetPassword() {
    if (this.forgotForm.forgotForm.valid) {
      this.http.post(apiHeader + 'user/forget_password/', this.forgotForm.forgotForm.value).subscribe(
        (response) => {
          this.swalMessages.successAlert(this.swalMessages.forgotPassword.accountActiveTitle200, this.swalMessages.forgotPassword.accountActiveMsg200);
        },
        (error) => {
          if (error.status == 404) {
            this.swalMessages.errorAlert(this.swalMessages.forgotPassword.invalidEmailTitle404, this.swalMessages.forgotPassword.invalidEmailMsg404);
          }
          else if (error.status == 400) {
            this.swalMessages.errorAlert(this.swalMessages.forgotPassword.accountNotActiveTitle400, this.swalMessages.forgotPassword.accountNotActiveMsg400);
          }
          else {
            this.swalMessages.errorAlert(this.swalMessages.commonErrors.internalErrorTitle500, this.swalMessages.commonErrors.internalErrorMsg500);
          }
        });
    }
    else {
      this.swalMessages.warningAlert(this.swalMessages.formErrors.invalidFormTitle, this.swalMessages.formErrors.invalidFormMsg);
    }

  }

  changePassword(pass1, pass2, code) {
    return this.http.put(apiHeader + 'change_password/',
      JSON.stringify({
        "pass1": pass1,
        "pass2": pass2,
        "code": code
      }));
  }


}
