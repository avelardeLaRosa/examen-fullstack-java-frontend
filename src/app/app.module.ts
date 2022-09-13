import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import {HttpClientModule} from '@angular/common/http';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { FormsModule } from '@angular/forms';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    CrearUsuarioComponent,
    ActualizarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
