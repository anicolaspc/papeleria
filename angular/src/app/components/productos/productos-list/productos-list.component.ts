import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../../services/productos/productos.service'

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss']
})
export class ProductosListComponent {

  productos: any = []
  constructor(
    private productosServices: ProductosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productosServices.obtener().subscribe(
      res => {
        this.productos = res
      },
      err => console.log(err)
    )
  }
}