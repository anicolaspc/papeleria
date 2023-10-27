import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../models/usuario';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent {

  usuario: Usuario = new Usuario()

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  guardarUsuario() {
    const confirmar = confirm('¿Desea Guardar Nuevo Usuario?')
    if (confirmar) {
      this.usuariosService.guardar(this.usuario).subscribe(usuario => {
        this.usuario = usuario
        this.router.navigateByUrl('/productos')
      })
    }
  }

}
