import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Persona],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal ('proyecto_5');

   persona: Persona = new Persona ('David', 'García', 21);

   personaArray: Persona [] = [
    new Persona('Ana', 'López', 22),
    new Persona('Luis', 'Martínez', 23),
    new Persona('Marta', 'Sánchez', 24),
    new Persona('Carlos', 'Gómez', 25)
   ]
}
