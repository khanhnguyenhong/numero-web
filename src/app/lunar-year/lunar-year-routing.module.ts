import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LunarYearComponent } from './lunar-year.component';

const routes: Routes = [
  {
    path: '',
    component: LunarYearComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LunarYearRoutingModule {}
