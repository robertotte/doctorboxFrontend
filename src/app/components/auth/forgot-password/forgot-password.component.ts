import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  EmailValidator
} from '@angular/forms';
import { forgotForm } from 'src/app/core/modals/forgot.form';
import { ForgotPasswordService } from './forgot-password.service';


declare const $: any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup;
  
  constructor(private forgotFormServ: forgotForm, private forgotServ: ForgotPasswordService) { }

  ngOnInit() {
    this.forgotForm = this.forgotFormServ.forgotForm;
  }

  forgetPassword() {
    this.forgotServ.forgetPassword();
  }

}
