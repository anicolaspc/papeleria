import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { UsuariosLogComponent } from './components/usuarios/usuarios-log/usuarios-log.component';
import { UsuariosFormComponent } from './components/usuarios/usuarios-form/usuarios-form.component';
import { ProductosListComponent } from './components/productos/productos-list/productos-list.component';
import { ProductosFormComponent } from './components/productos/productos-form/productos-form.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ProductoComponent } from './components/productos/producto/producto.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsuariosLogComponent,
    UsuariosFormComponent,
    ProductosListComponent,
    ProductosFormComponent,
    ConocenosComponent,
    FooterComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
