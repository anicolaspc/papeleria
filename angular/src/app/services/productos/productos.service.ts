import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Producto } from '../../models/producto'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productosSubject = new BehaviorSubject<any[]>([])
  productos$ = this.productosSubject.asObservable()
  api_url = 'http://localhost:3000/productos'

  constructor(private http: HttpClient) { }

  obtener() {
    return this.http.get(`${this.api_url}/get`)
  }

  buscarId(id: string) {
    return this.http.get(`${this.api_url}/get/id/${id}`)
  }
  
  buscarNombre(nombre: string) {
    return this.http.get(`${this.api_url}/get/nombre/${nombre}`)
  }
  
  buscarCategoria(categoria: string) {
    return this.http.get(`${this.api_url}/get/categoria/${categoria}`)
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

  compartir(productos: any[]){
    this.productosSubject.next(productos);
  }

}
