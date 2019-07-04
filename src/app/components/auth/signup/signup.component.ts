import { Component, OnInit, Input } from '@angular/core';
import { SignupService } from './signup.service';
import { signupForm } from 'src/app/core/modals/signup.form';
import { FormGroup } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  modalTitle: String = 'Register an account';
  signupForm: FormGroup;

  verifyUsername: boolean = false;
  verifyEmail: boolean = false;
  passwordShowStatus: boolean = true;

  constructor(private loginService: LoginService,
     private signupService: SignupService,
     private signupFormServ: signupForm,
     private router: Router) { }

  ngOnInit() {
    this.signupForm = this.signupFormServ.signupForm;
  }

  login(){
    this.router.navigate(['/login']);
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
