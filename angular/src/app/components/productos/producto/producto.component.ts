import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

  productos: boolean = true
  producto: any = []
  constructor(
    private productosServices: ProductosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const Id = params['id'];
      if (Id) {
        this.ver(Id);
      } else {
        this.productos = false
        this.Buscar();
      }
    });
  }

  ver(Id: string) {
    this.productosServices.buscarId(Id).subscribe(
      res => {
        this.producto = res;
      },
      err => console.log(err)
    );
  }

  Buscar() {
    if (this.producto) {
      this.productosServices.productos$.subscribe(
        producto => {
          this.producto = producto;
        }
      )
    } else {
      this.router.navigateByUrl('/productos')
    }
  }
}
