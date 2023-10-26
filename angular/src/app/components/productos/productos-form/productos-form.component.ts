import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.scss']
})
export class ProductosFormComponent {

  producto: Producto = {
    id: 0,
    nombre: '',
    imagen: '',
    detalle: '',
    precio: 0,
    cantidad: 0,
    categoria: ''
  }

  constructor (private productosServices: ProductosService){ }

  guardarProducto(){
    console.log(this.producto)
  }
}
