import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../../models/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  api_url = 'http://localhost:3000/usuarios'

  constructor(private http: HttpClient) { }

  obtener() {
    return this.http.get(`${this.api_url}`)
  }

  buscar(id: string) {
    return this.http.get(`${this.api_url}/${id}`)
  }

  guardar(usuario: Usuario){
    return this.http.post(`${this.api_url}`, usuario)
  }

  borrar(id: string){
    return this.http.delete(`${this.api_url}/${id}`)
  }

  actualizar(id: string, actualizar: Usuario){
    return this.http.put(`${this.api_url}/${id}`, actualizar)
  }

}
