import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../models/usuario';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent {

  usuario: Usuario = {
    id: 0,
    nombre: '',
    usuario: '',
    correo: '',
    contrasena: '',
    telefono: ''
  }

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {

  }

  guardarUsuario() {
    this.usuariosService.guardar(this.usuario).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

}
