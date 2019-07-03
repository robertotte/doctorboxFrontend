// ================ Modules ================
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routing } from './app.routing';

// ================ Components ================
import { AppComponent } from './app.component';

import { FooterComponent } from './common/footer/footer.component';


// ================ Services ================
import { AccountModalService } from './core/services/account-modal.service';
import { ForgotPasswordService } from './components/our-brand/forgot-password/forgot-password.service';
import { LoginService } from './components/our-brand/login/login.service';
import { SignupService } from './components/our-brand/signup/signup.service';
import { AuthGuard } from './AuthGuards/auth.guard';
import { AuthLogin } from './AuthGuards/auth.login';
import { AuthInterceptor, SetHeaders } from './AuthGuards/auth.interceptor';

// ================ Randoms ================
import { swalMessages } from './constants';

// ================ Forms ================
import { forgotForm } from './core/modals/forgot.form';
import { signupForm } from './core/modals/signup.form';
import { loginForm } from './core/modals/login.form';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared.module';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AccountModalService,
    ForgotPasswordService,
    forgotForm,
    LoginService,
    loginForm,
    SignupService,
    signupForm,
    swalMessages,

    SetHeaders,
    AuthGuard,
    AuthLogin,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
