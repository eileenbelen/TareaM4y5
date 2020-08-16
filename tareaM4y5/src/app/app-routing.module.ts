import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './mi-pagina/inicio/inicio.component';
import { NavegacionComponent } from './mi-pagina/navegacion/navegacion.component';
import { DataBindingComponent } from './mi-pagina/data-binding/data-binding.component';
import { ComponentePadreComponent } from './mi-pagina/componente-padre/componente-padre.component';
import { PracticaComponent } from './mi-pagina/practica/practica.component';
import { DificultadesComponent } from './mi-pagina/dificultades/dificultades.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
 { path: 'navegacion', component: NavegacionComponent},
 { path: 'dataBinding', component: DataBindingComponent},
 { path: 'comPadre', component: ComponentePadreComponent},
 { path: 'practica', component: PracticaComponent},
 { path: 'dificultades', component: DificultadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
