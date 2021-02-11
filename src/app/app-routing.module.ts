import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BirthChartComponent } from './birth-chart/birth-chart.component';
import { DataCalculationGuard } from './core/guards/data-calculation.guard';
import { GeneralInputComponent } from './general-input/general-input.component';
import { LifePeakComponent } from './life-peak/life-peak.component';
import { RulingNumberComponent } from './ruling-number/ruling-number.component';

const routes: Routes = [
    {
        path: '',
        component: GeneralInputComponent,
    },
    {
        path: 'general-input',
        component: GeneralInputComponent,
    },
    {
        path: 'ruling-number',
        component: RulingNumberComponent,
        canActivate: [DataCalculationGuard],
        redirectTo: ''
    },
    {
        path: 'birth-chart',
        component: BirthChartComponent,
        canActivate: [DataCalculationGuard],
        redirectTo: ''
    },
    {
        path: 'life-peak',
        component: LifePeakComponent,
        canActivate: [DataCalculationGuard],
        redirectTo: ''
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
