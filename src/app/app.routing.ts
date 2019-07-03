import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './components/our-brand/our-brand.module#OurBrandModule'
  },
  {
    path: '',
    loadChildren: './common/common.module#CommonComponentModule'
  },

  
  
 

];


export const routing = RouterModule.forRoot(APP_ROUTES);
