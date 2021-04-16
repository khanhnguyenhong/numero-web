import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifePeakComponent } from './life-peak.component';
import { LifePeakRoutingModule } from './life-peak-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LifePeakComponent],
  imports: [
    CommonModule,
    LifePeakRoutingModule,
    SharedModule
  ]
})
export class LifePeakModule { }
