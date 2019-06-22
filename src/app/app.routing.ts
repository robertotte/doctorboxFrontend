import { RouterModule, Routes } from '@angular/router';
// import { } from './components/reset-password/reset-password.module'

const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './components/our-brand/our-brand.module#OurBrandModule'
  },

  {
    path: 'account-activation/:code',
    loadChildren: './components/account-activation/account-activation.module#AccountActivationModule'
  },

  {
    path: 'rest-password/:code',
    loadChildren: './components/reset-password/reset-password.module#ResetPasswordModule'
  },

  // Page Not Found
  {
    path: '**',
    loadChildren: './components/page404/page404.module#Page404Module'
  }
];


export const routing = RouterModule.forRoot(APP_ROUTES);
