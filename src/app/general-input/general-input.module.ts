import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInputRoutingModule } from './general-input-routing.module';
import { GeneralInputComponent } from './general-input.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GeneralInputComponent],
  imports: [
    GeneralInputRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class GeneralInputModule { }
