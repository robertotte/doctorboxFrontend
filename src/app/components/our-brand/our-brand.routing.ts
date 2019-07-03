import { Routes, RouterModule } from '@angular/router';
import { OurBrandComponent } from './our-brand.component';
import { DoctorboxLandingComponent } from './doctorbox-landing/doctorbox-landing.component';
import { Page404Component } from './page404/page404.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AccountActivationComponent } from './account-activation/account-activation.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const OURBRAND_ROUTES: Routes = [
    {
        path: '', component: OurBrandComponent, children: [
            { path: '', component: DoctorboxLandingComponent },
            { path: 'reset-password/:code', component: ResetPasswordComponent },
            { path: 'account-activation/:code', component: AccountActivationComponent },
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'forgot', component: ForgotPasswordComponent },
            { path: '**', component: Page404Component },


        ]
    }
];

export const ourBrandRouting = RouterModule.forChild(OURBRAND_ROUTES);
