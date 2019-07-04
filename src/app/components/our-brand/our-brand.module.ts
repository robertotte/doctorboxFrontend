import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurBrandComponent } from './our-brand.component';
import { ourBrandRouting } from './our-brand.routing';
import { DoctorboxLandingComponent } from './doctorbox-landing/doctorbox-landing.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


import { Page404Component } from './page404/page404.component';
import { ResetPasswordComponent } from '../auth/reset-password/reset-password.component';
import { AccountActivationComponent } from '../auth/account-activation/account-activation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { ForgotPasswordComponent } from '../auth/forgot-password/forgot-password.component';
import { AuthModalComponent } from '../auth/auth-modal/auth-modal.component';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  imports: [
    ourBrandRouting,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    OurBrandComponent,
    Page404Component,
    DoctorboxLandingComponent,
    ResetPasswordComponent,
    AccountActivationComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    AuthModalComponent
  ]
})
export class OurBrandModule { }
