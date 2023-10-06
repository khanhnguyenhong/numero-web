import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyAiComponent } from './dummy-ai.component';

const routes: Routes = [
  {
    path: '',
    component: DummyAiComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DummyAiModule {}
