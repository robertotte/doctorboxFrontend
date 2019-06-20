import { Component, OnInit, Input } from '@angular/core';
import { AccountModalService } from 'src/app/core/services/account-modal.service';
import { SignupService } from './signup.service';
import { signupForm } from 'src/app/core/modals/signup.form';
import { FormGroup } from '@angular/forms';
import { LoginService } from '../login/login.service';

declare const $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input('showModal') showModal: boolean;
  modalTitle: String = 'Register an account';
  signupForm: FormGroup;

  verifyUsername: boolean = false;
  verifyEmail: boolean = false;
  passwordShowStatus: boolean = true;

  constructor(private loginService: LoginService, private signupService: SignupService, private signupFormServ: signupForm, private accountModal: AccountModalService, ) { }

  ngOnInit() {
    this.showHide();
    this.signupForm = this.signupFormServ.signupForm;
  }

  triggerLoginModal() {
    this.hideModal();
    this.accountModal.setModal('login');
    this.accountModal.emitModalCalled();
  }

  showHide() {
    if (this.showModal) {
      this.showForm();
    } else {
      this.hideModal();
    }
  }

  showForm() {
    $('#signUp').modal();
  }

  hideModal() {
    $('#signUp').modal('hide');
  }

  // ------------ SignUp
  signUp() {
    this.signupService.signUp();
  }

  usernameVerfication(username) {
    this.signupService.usernameVerfication(username)
      .subscribe(
        (response) => { this.verifyUsername = true; },
        (error) => { this.verifyUsername = false; }
      );
  }

  emailVerfication(email) {
    this.loginService.emailVerfication(email)
      .subscribe(
        (response) => { this.verifyEmail = true; },
        (error) => { this.verifyEmail = false; }
      );
  }

}
