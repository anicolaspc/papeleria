import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuarios-log',
  templateUrl: './usuarios-log.component.html',
  styleUrls: ['./usuarios-log.component.scss']
})

export class UsuariosLogComponent {

  constructor(private usuariosService: UsuariosService) { }

  iniciar(){
    const usuario = (document.querySelector('#Usuario') as HTMLInputElement).value
    const contrasena = (document.querySelector('#Contrasena') as HTMLInputElement).value
          console.log(usuario, contrasena)
    
  }
}