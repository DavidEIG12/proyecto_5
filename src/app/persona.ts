export class Persona {

    constructor(public nombre:string, public ruta:string, public apellidos:string, public edad:number) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.ruta = ruta;
    }
    // Getters y Setters
    getNombre(): string {
        return this.nombre;
    }
    getApellidos(): string {
        return this.apellidos;
    }
    getEdad(): number {
        return this.edad;
    }
    getRuta(): string {
        return 'assets/' + this.ruta;
    }   

    setNombre(nombre:string): void {
        this.nombre = nombre;
    }
    setApellidos(apellidos:string): void {
        this.apellidos = apellidos;
    }
    setEdad(edad:number): void {
        this.edad = edad;
    }
    setRuta(ruta:string): void {
        this.ruta = ruta;
    }
}