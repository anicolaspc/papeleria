import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  productos: any = []
  buscar: string = ''

  constructor(
    private router: Router,
    private productosServices: ProductosService
  ) { }

  logeado: boolean = false

  Buscar() {
    if (this.buscar) {
      this.productosServices.buscarCategoria(this.buscar).subscribe(
        (res: any = []) => {
          this.productos = res
          this.productosServices.compartir(res)
        },
        err => console.log(err))
      this.buscar = ''
      this.router.navigateByUrl('/producto')
    } else {
      this.router.navigateByUrl('/productos')
    }
  }

}
