import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component {

  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1 = [[350, 450, 100]];
  public color1 =  ['#9E120E', '#FF5800', '#FFB414'];

  public labels2: string[] = ['A', 'B', 'C'];
  public data2 = [[100, 200, 100]];
  public color2 =  ['#9E1E', '#FF4280', '#FFB754'];

}
