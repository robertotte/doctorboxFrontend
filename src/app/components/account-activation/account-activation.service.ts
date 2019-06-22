import { Injectable } from '@angular/core';
import { apiHeader, swalMessages } from '../../constants';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountActivationService {

  constructor(private http: HttpClient, private swalMessages: swalMessages, private router: Router) { }

  accountActivation(code) {
    this.http.post(apiHeader + 'user/activate_account/' + code,{}).subscribe(
      data => {
        this.swalMessages.successAlert(this.swalMessages.accountActivation.accountVerified200, '');
        this.router.navigate(['/']);
      },
      error => {
        if (error.status == 404) {
          this.swalMessages.errorAlert(this.swalMessages.accountActivation.accountAlreadyVerified404, '');
        }
        else if (error.status == 400) {
          this.swalMessages.errorAlert(this.swalMessages.accountActivation.InvalidAccount400, '');
        }

        this.router.navigate(['/']);
      });

  }
}
