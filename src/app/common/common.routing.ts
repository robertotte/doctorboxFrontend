import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './common.component';



const COMMON_ROUTES: Routes = [
  {
    path: '', component: CommonComponent, children: [
  
    ]
  }
];
export const CommonRouting = RouterModule.forChild(COMMON_ROUTES);
