import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiHeader, swalMessages } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class RestPasswordService {

  constructor(private http: HttpClient, private swalMessages: swalMessages) { }

  restPassword(form) {
    if (form.valid) {
      this.http.post(apiHeader + 'user/forget_change_password', form.value)
        .subscribe(
          rest => {
            this.swalMessages.successAlert(this.swalMessages.resetPassword.successTitle200, this.swalMessages.resetPassword.successMsg200);
          },
          error => {
            if (error.status == 404) {
              this.swalMessages.errorAlert(this.swalMessages.resetPassword.invalidcodeTitle404, this.swalMessages.resetPassword.invalidcodeMsg404)
            }
            else if (error.status == 400) {
              this.swalMessages.errorAlert(this.swalMessages.resetPassword.invalidpasswordformatTitle400, this.swalMessages.resetPassword.invalidpasswordformatMsg400)
            }
            else {
              this.swalMessages.errorAlert(this.swalMessages.commonErrors.internalErrorTitle500, this.swalMessages.commonErrors.internalErrorMsg500)
            }

          });
    }
    else {
      this.swalMessages.errorAlert(this.swalMessages.formErrors.invalidFormTitle, this.swalMessages.formErrors.invalidFormMsg)
    }

  }
}