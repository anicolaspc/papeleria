import { Component } from '@angular/core';

import { ProductosService } from '../../../services/productos/productos.service'

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss']
})
export class ProductosListComponent {

  productos: any = []
  constructor(private productosServices: ProductosService) { }

  ngOnInit() {
    this.productosServices.obtener().subscribe(
      res => {
        this.productos = res
      },
      err => console.log(err)
    )
  }
}


