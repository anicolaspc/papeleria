import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { UsuariosFormComponent } from './components/usuarios/usuarios-form/usuarios-form.component';
import { UsuariosListComponent } from './components/usuarios/usuarios-list/usuarios-list.component';
import { ProductosListComponent } from './components/productos/productos-list/productos-list.component';
import { ProductosFormComponent } from './components/productos/productos-form/productos-form.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsuariosFormComponent,
    UsuariosListComponent,
    ProductosListComponent,
    ProductosFormComponent,
    ConocenosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
