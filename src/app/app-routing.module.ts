import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modulo especializado en rutas
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

// rutas especiales para solo las paginas
import { PagesRoutingModule } from './pages/pages.routing';
// rutas especiales para solo los componentes de autenticacion
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent } // sino corresponde redirecciono a ese componente
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
