import { Component } from '@angular/core';

@Component({
  selector: 'app-progess',
  templateUrl: './progess.component.html',
  styleUrls: ['./progess.component.css']
})
export class ProgessComponent{

  progreso1: number;
  progreso2: number;

  constructor() {
    this.progreso1 = 0;
    this.progreso2 = 100;
  }

  get getProgreso1() {
    return `${this.progreso1}%`;
  }

  get getProgreso2() {
    return `${this.progreso2}%`;
  }

  // Opcional que se llame esta funcion desde el componente
  cambioValorHijo(nuevoValor: number) {
    this.progreso1 = nuevoValor;
  }


}
