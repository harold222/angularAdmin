import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent {

  @Input('progress') progreso: number;
  @Input() btnClass: string;

  @Output() valorSalida: EventEmitter<number>;

  constructor() {
    this.progreso = 0;
    this.btnClass = 'btn btn-primary';
    this.valorSalida  = new EventEmitter();
  }

  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor >= 0) {
      this.emitirSalida(100);
      return this.progreso = 100;
    } else if (this.progreso <= 0 && valor < 0) {
      this.emitirSalida(0);
      return this.progreso = 0;
    }

    this.progreso += valor;
    this.emitirSalida(this.progreso);
  }

  emitirSalida(valorActual: number) {
    this.valorSalida.emit(valorActual);
  }

  onChange(valor: number) { // este metodo se activa cada que cambio un valor desde el inputa ngmodelchange

    if (valor >= 100) {
      this.progreso = 100;
    } else if (valor < 0) {
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }

    this.emitirSalida(this.progreso);
  }

}
