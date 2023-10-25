import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Producto } from '../../models/producto'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  api_url = 'http://localhost:3000/productos'

  constructor(private http: HttpClient) { }

  obtener() {
    return this.http.get(`${this.api_url}`)
  }

  buscar(id: string) {
    return this.http.get(`${this.api_url}/${id}`)
  }

  guardar(producto: Producto){
    return this.http.post(`${this.api_url}`, producto)
  }

  borrar(id: string){
    return this.http.delete(`${this.api_url}/${id}`)
  }

  actualizar(id: string, actualizar: Producto){
    return this.http.put(`${this.api_url}/${id}`, actualizar)
  }

}
