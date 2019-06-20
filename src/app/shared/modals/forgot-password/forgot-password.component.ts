import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  EmailValidator
} from '@angular/forms';
import { AccountModalService } from '../../../core/services/account-modal.service';
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
  @Input('showModal') showModal: boolean;
  
  constructor(private forgotFormServ: forgotForm, private forgotServ: ForgotPasswordService) { }

  ngOnInit() {
    this.forgotForm = this.forgotFormServ.forgotForm;
    this.showHide();
  }

  showHide() {
    if (this.showModal) {
      this.showForm();
    } else {
      this.hideModal();
    }
  }

  showForm() {
    $('#forgotPW').modal();
  }

  hideModal() {
    $('#forgotPW').modal('hide');
  }

  get email() {
    return this.forgotForm.get('email');
  }

  forgetPassword() {
    this.forgotServ.forgetPassword();
  }

}
