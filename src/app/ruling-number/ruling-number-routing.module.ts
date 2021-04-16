import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulingNumberComponent } from './ruling-number.component';

const routes: Routes = [{
    path: '', component: RulingNumberComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RulingNumberRoutingModule { }