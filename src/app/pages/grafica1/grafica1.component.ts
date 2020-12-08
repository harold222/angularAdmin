import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component {

  private labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  private data1 = [[350, 450, 100]];
  private color1 =  ['#9E120E', '#FF5800', '#FFB414'];

  private labels2: string[] = ['A', 'B', 'C'];
  private data2 = [[100, 200, 100]];
  private color2 =  ['#9E1E', '#FF4280', '#FFB754'];

  constructor() { }

}
