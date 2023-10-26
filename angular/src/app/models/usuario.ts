export interface Usuario{
    id?: number;
    nombre?: string;
    usuario?: string;
    correo?: string; 
    contrasena?: string; 
    telefono?: string
} 

export interface Logear{
    usuario: string;
    contrasena: string
}