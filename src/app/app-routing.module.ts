import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgessComponent } from './pages/progess/progess.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  // Estas seran las rutas protegidas
  {
    path: '',
    component: PagesComponent, // rutas hijas
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progess', component: ProgessComponent },
      { path: 'grafica1', component: Grafica1Component },
      { path: '',  redirectTo: '/dashboard', pathMatch: 'full' } // ruta si esta vacia
    ]
  },
  { path: 'register', component: RegisterComponent }, // Estas seran las rutas publicas
  { path: 'login', component: LoginComponent },
  { path: '**', component: NopagefoundComponent } // sino corresponde redirecciono a ese componente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
