import { RouterModule, Routes } from '@angular/router';
import { } from './components/account-activation/account-activation.module'
const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './components/our-brand/our-brand.module#OurBrandModule'
  },

  {
    path: 'account-activation/:code',
    loadChildren: './components/account-activation/account-activation.module#AccountActivationModule'
  },

  // Page Not Found
  {
    path: '**',
    loadChildren: './components/page404/page404.module#Page404Module'
  }
];


export const routing = RouterModule.forRoot(APP_ROUTES);
