import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.scss']
})
export class ProductosFormComponent implements OnInit {

  producto: Producto = new Producto()

  constructor(
    private productosServices: ProductosService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  guardarProducto(): void {
   const confirmar = confirm('¿Desea Guardar Producto?')
   if (confirmar) {
    this.productosServices.guardar(this.producto).subscribe(producto => {
      this.producto = producto
      this.router.navigateByUrl('/productos')
    })
   }

  }
}
