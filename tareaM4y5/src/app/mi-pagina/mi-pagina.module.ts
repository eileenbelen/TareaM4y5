import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { PracticaComponent } from './practica/practica.component';
import { DificultadesComponent } from './dificultades/dificultades.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [NavegacionComponent, DataBindingComponent, ComponentePadreComponent, PracticaComponent, DificultadesComponent, InicioComponent, FooterComponent, NavComponent],
  imports: [
    CommonModule
  ]
})
export class MiPaginaModule { }
