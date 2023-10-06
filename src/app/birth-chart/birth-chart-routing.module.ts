import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthChartComponent } from './birth-chart.component';

const routes: Routes = [{
    path: '', component: BirthChartComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BirthChartRoutingModule { }
