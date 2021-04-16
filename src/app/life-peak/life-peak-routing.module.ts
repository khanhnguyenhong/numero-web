import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifePeakComponent } from './life-peak.component';

const routes: Routes = [{
    path: '', component: LifePeakComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LifePeakRoutingModule { }