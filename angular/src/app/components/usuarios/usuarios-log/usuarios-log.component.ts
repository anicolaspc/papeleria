import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Logear } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuarios-log',
  templateUrl: './usuarios-log.component.html',
  styleUrls: ['./usuarios-log.component.scss']
})
export class UsuariosLogComponent {

  logear: Logear = {
    usuario: '',
    contrasena: ''
  }

  constructor(private formBuilder: FormBuilder) { }

}
