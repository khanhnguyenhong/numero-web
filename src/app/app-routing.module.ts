import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataCalculationGuard } from './core/guards/data-calculation.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'general-input',
        pathMatch: 'full',
    },
    {
        path: 'general-input',
        loadChildren: () => import('./general-input/general-input.module').then(m => m.GeneralInputModule),
    },
    {
        path: 'ruling-number',
        loadChildren: () => import('./ruling-number/ruling-number.module').then(m => m.RulingNumberModule),
        canActivate: [DataCalculationGuard]
    },
    {
        path: 'birth-chart',
        loadChildren: () => import('./birth-chart/birth-chart.module').then(m => m.BirthChartModule),
        canActivate: [DataCalculationGuard]
    },
    {
        path: 'life-peak',
        loadChildren: () => import('./life-peak/life-peak.module').then(m => m.LifePeakModule),
        canActivate: [DataCalculationGuard]
    },
    {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
