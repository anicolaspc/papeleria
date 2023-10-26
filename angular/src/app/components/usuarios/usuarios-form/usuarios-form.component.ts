import { Component } from '@angular/core';
//import { FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
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
    telefono: 0
  }

  constructor(private usuariosService: UsuariosService){ }
  
  guardarUsuario(){
    console.log(this.usuario)
  }
  
}
