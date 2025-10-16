import { Persona } from "./persona";

export class PersonaDatosAdicionales extends Persona {
  constructor (nombre:string, ruta:string, apellidos:string, edad:number, public direccion:string, public telefono:string) {
    super(nombre, ruta, apellidos, edad);
    this.direccion = direccion;
    this.telefono = telefono;
    }

    // Getters y Setters
    getDireccion(): string {
        return this.direccion;
    }
    getTelefono(): string {
        return this.telefono;
    }
    setDireccion(direccion:string): void {
        this.direccion = direccion;
    }
    setTelefono(telefono:string): void {
        this.telefono = telefono;
    }
}