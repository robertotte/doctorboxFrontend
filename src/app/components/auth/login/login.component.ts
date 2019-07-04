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
  title: String = 'Login to DoctorBox';
  login: FormGroup;
  passwordShowStatus: boolean = true;
  
  constructor(private loginForm: loginForm, private loginService: LoginService ) { }

  ngOnInit() {
    this.login = this.loginForm.loginForm;
  }


  // --------------- Login
  onLogin() {
    this.loginService.login();
  }


}
