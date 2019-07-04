import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiHeader, swalMessages } from '../../../constants';
import { SetHeaders } from 'src/app/AuthGuards/auth.interceptor';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestPasswordService {

  constructor(
    private http: HttpClient,
    private swalMessages: swalMessages,
    private authInterceptor: SetHeaders,
    private router: Router
  ) { }

  resetPassword(form) {
    if (form.valid) {
      this.http.post(apiHeader + 'user/forget_change_password/', JSON.stringify({
        code: form.value.code,
        password: form.value.newPassword
      }), { headers: this.authInterceptor.setHeaders() })
        .subscribe(
          rest => {
            this.swalMessages.successAlert(this.swalMessages.resetPassword.successTitle200, this.swalMessages.resetPassword.successMsg200);
            this.router.navigate(['/login']);
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