import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const routes: Routes = [
// Estas seran las rutas protegidas
    {
        path: 'dashboard',
        component: PagesComponent, // rutas hijas
        children: [
        { path: '', component: DashboardComponent },
        { path: 'progess', component: ProgessComponent },
        { path: 'grafica1', component: Grafica1Component },
        { path: '',  redirectTo: '/dashboard', pathMatch: 'full' } // ruta si esta vacia
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

