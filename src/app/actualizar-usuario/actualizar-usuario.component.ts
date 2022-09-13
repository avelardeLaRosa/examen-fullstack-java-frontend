import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  id:number;
  usuario : any = new Usuario();

  constructor(private usuarioServicio:UsuarioService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.editar();
  }

 

  goToListarUsuarios(){
    this.router.navigate(['/usuarios']);
  }

  onSubmit(){
    console.log(this.usuario);
    this.usuarioServicio.actualizarUsuario(this.id,this.usuario).subscribe(data =>{
      this.goToListarUsuarios();
    },error => console.log(error));
  }

  editar(){
    let id = localStorage.getItem("id");
    this.usuarioServicio.obtenerUsuarioPorId(Number(id)).subscribe(data =>{
      this.usuario=data;
    });
  }

  actualizar(usuario:Usuario){
    this.usuarioServicio.actualizarUsuario(usuario.id,usuario).subscribe(data =>{
      this.usuario =data;
      alert("Se actualizo correctamente");
      this.goToListarUsuarios();
    })
  }

}
