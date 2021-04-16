import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulingNumberRoutingModule } from './ruling-number-routing.module';
import { RulingNumberComponent } from './ruling-number.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RulingNumberComponent],
  imports: [
    CommonModule,
    RulingNumberRoutingModule,
    SharedModule
  ]
})
export class RulingNumberModule { }
