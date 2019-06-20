import { Injectable, EventEmitter } from '@angular/core';
import { apiHeader, swalMessages } from '../../../constants';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
import * as moment from 'moment';
import { loginForm } from 'src/app/core/modals/login.form';
import { LoggedInUser } from './loggedin-user.modal';

declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  time: Date;
  exp_time;

  constructor(private http: HttpClient, private swalMessages: swalMessages, private loginForm: loginForm) { }

  // --------------- using methods

  login() {
    if (this.loginForm.loginForm.valid) {
      this.loginAuthentication().subscribe(auth => {
        localStorage.setItem('role', auth['doctor']);
        this.http.post(apiHeader + 'user/login/', this.loginForm.loginForm.value)
          .subscribe(
            data => {
              let decodedToken = JSON.stringify(jwt_decode(JSON.stringify(data['token'])));
              localStorage.setItem('DecodedToken', decodedToken)
              localStorage.setItem('Token', JSON.stringify(data['token']));

              this.swalMessages.successAlert(this.swalMessages.loginStatus.success, '');
              $('#login').modal('hide');
            },
            error => {
              if (error.status == 400)
                this.swalMessages.errorAlert(this.swalMessages.loginStatus.invalid, '');
            });
      },
        error => {
          if (error.status == 401) {
            this.swalMessages.errorAlert(this.swalMessages.loginAuth.inalidUser401, '');
          }
          else if (error.status == 400) {
            this.swalMessages.errorAlert(this.swalMessages.loginAuth.accountNotActive400, '');
          }
          else if (error.status == 404) {
            this.swalMessages.errorAlert(this.swalMessages.loginAuth.invalidusernameorpassword404, '');
          }
        });
    }
    else {
      this.swalMessages.warningAlert(this.swalMessages.formErrors.invalidFormTitle, this.swalMessages.formErrors.invalidFormMsg);
    }
  }

  hideModal() {
    $('#login').modal('hide');
  }

  emailVerfication(email) {
    return this.http.post(apiHeader + 'user/emailVer/', {
      'email': email
    });
  }

  loginAuthentication() {
    return this.http.post(apiHeader + 'user/login_authentication/', this.loginForm.loginForm.value);
  }


  logout() {
    localStorage.clear();
    this.swalMessages.successAlert(this.swalMessages.logout.Title, this.swalMessages.logout.Msg);
  }
  // --------------- End

}

