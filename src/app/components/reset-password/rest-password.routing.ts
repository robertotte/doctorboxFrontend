import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password.component';

const route: Routes = [
    { path: '', component: ResetPasswordComponent }
];

export const ResetPasswordRouting = RouterModule.forChild(route);
