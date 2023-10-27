export class Producto {
    id?: number;
    nombre?: string;
    imagen?: string;
    detalles?: string;
    precio?: number;
    cantidad?: number;
    categoria?: string;

    constructor() {
        this.id = 0
        this.nombre = ''
        this.imagen = ''
        this.detalles = ''
        this.precio = 0
        this.cantidad = 0
        this.categoria = ''
    }

}