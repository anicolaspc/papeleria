import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductosListComponent } from './components/productos/productos-list/productos-list.component'
import { ProductosFormComponent } from './components/productos/productos-form/productos-form.component'
import { UsuariosLogComponent } from './components/usuarios/usuarios-log/usuarios-log.component';
import { UsuariosFormComponent } from './components/usuarios/usuarios-form/usuarios-form.component'
import { ConocenosComponent } from './components/conocenos/conocenos.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: ProductosListComponent
  },
  {
    path: 'productos/agregar',
    component: ProductosFormComponent
  },
  {
    path: 'usuarios',
    component: UsuariosLogComponent
  },
  {
    path: 'usuarios/agregar',
    component: UsuariosFormComponent
  },
  {
    path: 'conocenos',
    component: ConocenosComponent
  },
  {
    path: '**', redirectTo: 'productos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
