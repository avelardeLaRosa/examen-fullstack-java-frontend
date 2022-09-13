import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = "http://localhost:8080/api/v1/usuarios";

  constructor(private httpClient : HttpClient) { }

  obtenerListaDeUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseUrl}`);
  }

  crearUsuario(usuario:Usuario):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,usuario);

  }

  actualizarUsuario(id:number,usuario:Usuario):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,usuario);
  }

  obtenerUsuarioPorId(id:number):Observable<Object>{
    return this.httpClient.get<Usuario>(`${this.baseUrl}/${id}`);
  }

  eliminarUsuario(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
