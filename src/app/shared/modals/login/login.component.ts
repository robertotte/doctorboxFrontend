import { Component, OnInit, Input } from '@angular/core';
import { AccountModalService } from 'src/app/core/services/account-modal.service';
import { LoginService } from './login.service';
import { FormGroup } from '@angular/forms';
import { loginForm } from 'src/app/core/modals/login.form';
import { HttpClient } from '@angular/common/http';

declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input('showModal') showModal: boolean;
  title: String = 'Login to Crickslab';
  login: FormGroup;
  passwordShowStatus: boolean = true;
  
  constructor(private loginForm: loginForm, private loginService: LoginService, private accountModal: AccountModalService, private http: HttpClient ) { }

  ngOnInit() {
    this.showHide();
    this.login = this.loginForm.loginForm;
  }

  showForm() {
    $('#login').modal();
  }

  hideModal() {
    $('#login').modal('hide');
  }

  triggerSignupModal() {
    this.hideModal();
    this.accountModal.setModal('signup');
    this.accountModal.emitModalCalled();
  }

  triggerForgotPasswordModal() {
    this.hideModal();
    this.accountModal.setModal('forgotPassword');
    this.accountModal.emitModalCalled();
  }

  showHide() {
    if (this.showModal) {
      this.showForm();
    } else {
      this.hideModal();
    }
  }

  // --------------- Login
  onLogin() {
    this.loginService.login();
  }


}
