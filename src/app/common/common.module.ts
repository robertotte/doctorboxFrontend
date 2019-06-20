import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './common.component';
import { CommonRouting } from './common.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CommonRouting,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    CommonComponent,

  ]
})
export class CommonComponentModule { }
