import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[];
  constructor(private usuarioServicio:UsuarioService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  private obtenerUsuarios(){
    this.usuarioServicio.obtenerListaDeUsuarios().subscribe(data =>{
        this.usuarios = data;
    });
  }

   actualizarUsuario(id:number){
    this.router.navigate(['actualizar-usuario',id]);
    localStorage.setItem("id",id.toString());
  }

   eliminarUsuario(id:number){
    this.usuarioServicio.eliminarUsuario(id).subscribe(data => {
      console.log(data);
      alert("Se elimino usuario correctamente");
      this.obtenerUsuarios();
    })
  }

}
