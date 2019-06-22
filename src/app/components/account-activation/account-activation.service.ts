import { Injectable } from '@angular/core';
import { apiHeader, swalMessages } from '../../constants';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountActivationService {

  constants: any;
  constructor(private http: HttpClient, 
  private swalMessages: swalMessages, private router: Router) {
    this.getConstants();
   }

  accountActivation(code) {
    this.http.post(apiHeader + 'user/activate_account/' + code,{}).subscribe(
      data => {
        this.swalMessages.successAlert(this.constants.accountActivation.accountVerified, '');
        this.router.navigate(['/']);
      },
      error => {
        if (error.status == 404) {
          this.swalMessages.errorAlert(this.constants.accountActivation.accountAlreadyVerified, '');
        }
        else if (error.status == 400) {
          this.swalMessages.errorAlert(this.constants.accountActivation.invalidAccount, '');
        }

        this.router.navigate(['/']);
      });

  }

    
  getConstants() {

    return this.http.get('../assets/i18n/de.json').subscribe( data => {
       this.constants = data;
    });


 }

}
