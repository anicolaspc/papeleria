export interface Usuario{
    id?: number;
    nombre?: string;
    usuario?: string;
    correo?: string; 
    contrasena?: string; 
    telefono?: number
} 

export interface Logear{
    usuario: string;
    contrasena: string
}