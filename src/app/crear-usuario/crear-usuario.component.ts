import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuario : Usuario = new Usuario();
  constructor(private usuarioServicio:UsuarioService,
    private router:Router) { }

  ngOnInit(): void {
    console.log(this.usuario);
  }

  crearUsuario(){
    this.usuarioServicio.crearUsuario(this.usuario).subscribe(data => {
      console.log(data);
      alert("Se creo usuario correctamente");
      this.goToListarUsuarios();
    }, error => console.log(error));
  }

  goToListarUsuarios(){
    this.router.navigate(['/usuarios']);
  }

  onSubmit(){
    console.log(this.usuario);
    this.crearUsuario();
  }

}
