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

  //  persona: Persona = new Persona ('David', 'García', 21);

   personaArray: Persona [] = [
    new Persona ('David', 'assets/descarga.png', 'García', 21),
    new Persona ('Ana', 'assets/descarga2.png', 'López', 22),
    new Persona ('María', 'assets/descarga3.png', 'Martínez', 20)
   ]
}
