import { Routes, RouterModule } from '@angular/router';
import { AccountActivationComponent } from './account-activation.component';

const route: Routes = [
    { path: '', component: AccountActivationComponent }
];

export const AccoutnActivationRouting = RouterModule.forChild(route);
