export class Usuario {
    id?: number
    nombre?: string
    usuario?: string
    correo?: string
    contrasena?: string
    telefono?: string

    constructor() {
        this.id = 0
        this.nombre = ''
        this.usuario = ''
        this.correo = ''
        this.contrasena = ''
        this.telefono = ''
    }
}
