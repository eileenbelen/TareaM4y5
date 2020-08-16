import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavComponent } from './mi-pagina/nav/nav.component';
import { FooterComponent } from './mi-pagina/footer/footer.component';
import { InicioComponent } from './mi-pagina/inicio/inicio.component';
import { NavegacionComponent } from './mi-pagina/navegacion/navegacion.component';
import { DataBindingComponent } from './mi-pagina/data-binding/data-binding.component';
import { ComponentePadreComponent } from './mi-pagina/componente-padre/componente-padre.component';
import { PracticaComponent } from './mi-pagina/practica/practica.component';
import { DificultadesComponent } from './mi-pagina/dificultades/dificultades.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,PracticaComponent,DificultadesComponent,
    NavComponent, FooterComponent,InicioComponent,NavegacionComponent,DataBindingComponent,ComponentePadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
