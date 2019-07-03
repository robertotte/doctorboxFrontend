import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurBrandComponent } from './our-brand.component';
import { ourBrandRouting } from './our-brand.routing';
import { DoctorboxLandingComponent } from './doctorbox-landing/doctorbox-landing.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


import { Page404Component } from './page404/page404.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AccountActivationComponent } from './account-activation/account-activation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  imports: [
    ourBrandRouting,
    SharedModule,
    RouterModule,
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
  ]
})
export class OurBrandModule { }
