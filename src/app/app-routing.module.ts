import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {path: 'usuarios', component:ListaUsuariosComponent},
  {path: '', redirectTo:'usuarios',pathMatch:'full'},
  {path: 'crear-usuario', component : CrearUsuarioComponent},
  {path: 'actualizar-usuario/:id',component : ActualizarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
