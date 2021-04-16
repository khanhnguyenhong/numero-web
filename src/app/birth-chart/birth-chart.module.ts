import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthChartComponent } from './birth-chart.component';
import { BirthChartRoutingModule } from './birth-chart-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BirthChartComponent],
  imports: [
    CommonModule,
    BirthChartRoutingModule,
    SharedModule
  ]
})
export class BirthChartModule { }
