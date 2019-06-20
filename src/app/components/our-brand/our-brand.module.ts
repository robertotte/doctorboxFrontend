import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurBrandComponent } from './our-brand.component';
import { ourBrandRouting } from './our-brand.routing';
import { DoctorboxLandingComponent } from './doctorbox-landing/doctorbox-landing.component';



@NgModule({
  imports: [
    CommonModule,
    ourBrandRouting,
  ],
  declarations: [
    OurBrandComponent,
    DoctorboxLandingComponent
  ]
})
export class OurBrandModule { }
