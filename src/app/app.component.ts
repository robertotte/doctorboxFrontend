import { Component } from '@angular/core';
import { AccountModalService } from './core/services/account-modal.service';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doctorbox';
  accountModals: any = {
    login: false,
    signup: false,
    forgotPassword: false
  };

  constructor(
    private accountModal: AccountModalService,
  ) {}

  ngOnInit() {
    this.accountModal.isModalCalled.subscribe(isCalled => {
      this.accountModals = {
        signup: false,
        login: false,
        forgotPassword: false
      };
      const modal = this.accountModal.getModal();
      if (modal === 'signup') {
        this.accountModals.signup = true;
        $('#signUp').modal();
      } 
      else if (modal === 'login') {
        $('#login').modal();
        this.accountModals.login = true;
      } else if (modal === 'forgotPassword') {
        this.accountModals.forgotPassword = true;
      }
    });

  }
}
