import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunarYearRelationComponent } from './lunar-year-relation/lunar-year-relation.component';
import { LunarYearComponent } from './lunar-year.component';
import { LunarYearRoutingModule } from './lunar-year-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [LunarYearRelationComponent, LunarYearComponent],
  imports: [CommonModule, LunarYearRoutingModule, SharedModule, MatTableModule]
})
export class LunarYearModule {}
