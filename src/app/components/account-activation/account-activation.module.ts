import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccoutnActivationRouting } from './account-activation.routing';
import { AccountActivationComponent } from './account-activation.component';
import { AccountActivationService } from './account-activation.service';

import { swalMessages } from '../../constants';

@NgModule({
  declarations: [AccountActivationComponent],
  imports: [
    CommonModule,
    AccoutnActivationRouting
  ],
  providers: [AccountActivationService, swalMessages]
})
export class AccountActivationModule { }
