import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//  Modulo especializado en componentes
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

// Modulos usados
import { AppRoutingModule } from './app-routing.module';
// para rutas de paginas
import { PagesModule } from './pages/pages.module';
// para los componentes de autenticacion
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
