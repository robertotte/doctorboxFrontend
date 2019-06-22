import { Injectable, EventEmitter } from '@angular/core';
import { apiHeader, swalMessages } from '../../../constants';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
import { loginForm } from 'src/app/core/modals/login.form';


declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  time: Date;
  exp_time;
  constants: any;


  constructor(private http: HttpClient, private swalMessages: swalMessages,
    private loginForm: loginForm) {
    this.getConstants();

  }

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

              this.swalMessages.successAlert(this.constants.loginStatus.success, '');           
               $('#login').modal('hide');
            },
            error => {
              if (error.status == 400)
                this.swalMessages.errorAlert(this.constants.loginStatus.invalid, '');
            });
      },
        error => {
          if (error.status == 401) {
            this.swalMessages.errorAlert(this.constants.loginAuth.inalidUser401, '');
          }
          else if (error.status == 400) {
            this.swalMessages.errorAlert(this.constants.loginAuth.accountNotActive400, '');
          }
          else if (error.status == 404) {
            this.swalMessages.errorAlert(this.constants.loginAuth.invalidusernameorpassword404, '');
          }
        });
    }
    else {
      this.swalMessages.warningAlert(this.constants.formErrors.invalidFormTitle, this.constants.formErrors.invalidFormMsg);
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
    this.swalMessages.successAlert(this.constants.logout.Title, this.constants.logout.Msg);
  }

  getConstants() {

    return this.http.get('../assets/i18n/de.json').subscribe(data => {
      this.constants = data;
    });


  }
}

