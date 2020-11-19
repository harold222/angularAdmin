import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';

// para componentes compartidos
import { SharedModule } from '../shared/shared.module';
// para router outlet
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgessComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent,
    ProgessComponent,
    Grafica1Component,
    PagesComponent
  ]
})
export class PagesModule { }
