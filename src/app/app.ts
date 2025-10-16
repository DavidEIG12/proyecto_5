import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona';
import { CommonModule } from '@angular/common';
import { PersonaDatosAdicionales } from './personaDatosAdicionales';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal ('proyecto_5');
  submitted: boolean = false;
  selectedPersona: PersonaDatosAdicionales | null = null;

  //  persona: Persona = new Persona ('David', 'García', 21);

  //  personaArray: Persona [] = [
  //   new Persona ('David', 'descarga.png', 'García', 21),
  //   new Persona ('Ana', 'descarga2.png', 'López', 22),
  //   new Persona ('María', 'descarga3.png', 'Martínez', 20)
  //  ]

   personaArray: PersonaDatosAdicionales [] = [
    new PersonaDatosAdicionales ('David', 'descarga.png', 'García', 21, 'calle Falsa 123', '600112233'),
    new PersonaDatosAdicionales ('Ana', 'descarga2.png', 'López', 22, 'Avenida Siempre Viva 742', '600445566'),
    new PersonaDatosAdicionales ('María', 'descarga3.png', 'Martínez', 20, 'Paseo del Prado 1', '600778899')
   ]

   onSubmit() {
    this.submitted = !this.submitted;
    if (this.submitted && !this.selectedPersona && this.personaArray.length) {
      this.selectedPersona = this.personaArray[0];
    }
   }

   onSelect(p: PersonaDatosAdicionales) {
    this.selectedPersona = p;
    this.submitted = true;
   }
}
