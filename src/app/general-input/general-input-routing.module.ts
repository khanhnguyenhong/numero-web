import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralInputComponent } from './general-input.component';

const routes: Routes = [{
    path: '', component: GeneralInputComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GeneralInputRoutingModule { }