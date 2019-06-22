import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiHeader, swalMessages } from '../../../constants';
import { SetHeaders } from '../../../AuthGuards/auth.interceptor';
import { signupForm } from 'src/app/core/modals/signup.form';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constants: any;
  constructor(private swalMessages: swalMessages,
    private http: HttpClient,
    private authInterceptor: SetHeaders, private signupForm: signupForm) {
    this.getConstants();
  }

  signUp() {
    if (this.signupForm.signupForm.valid) {
      this.http.post(apiHeader + "user/user_register/",
        this.signupForm.signupForm.value, { headers: this.authInterceptor.setHeaders() })
        .subscribe(
          data => {
            this.swalMessages.successAlert(this.constants.signupStatus.activationMailTitle, this.swalMessages.signupStatus.activationMailMsg200);
          },
          error => {
            if (error.status == 404) {
              this.swalMessages.warningAlert(this.constants.signupStatus.userOrEmailExist, this.swalMessages.signupStatus.userOrEmailExistMsg404);
            }
            else if (error.status == 403) {
              this.swalMessages.errorAlert(this.constants.commonErrors.internalErrorTitle, this.swalMessages.commonErrors.internalErrorMsg500);
            }
            else if (error.status == 400) {
              this.swalMessages.errorAlert(this.constants.signupStatus.passwordTitle, this.swalMessages.signupStatus.passwordMsg400);
            }
            else if (error.status == 500) {
              this.swalMessages.errorAlert(this.constants.commonErrors.internalErrorTitle, this.swalMessages.commonErrors.internalErrorMsg500);
            }
          });
    }
    else {
      this.swalMessages.warningAlert(this.constants.formErrors.invalidFormTitle, this.constants.formErrors.invalidFormMsg);
    }
  }

  usernameVerfication(username) {
    return this.http.post(apiHeader + 'user/usernameVer/', {
      'username': username
    });
  }

  getConstants() {

    return this.http.get('../assets/i18n/de.json').subscribe(data => {
      this.constants = data;

    });


  }

}
