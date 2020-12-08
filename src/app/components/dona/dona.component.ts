import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: Label[];
  public doughnutChartData: MultiDataSet;

  public colors: Color[];

  @Input() title: string;
  @Input() labels: string[];
  @Input() data;
  @Input() color;

  constructor() {
    if (this.title === '' || !this.title) {
      this.title = 'Sin titulo';
    }
  }

  ngOnInit(): void {
    this.doughnutChartLabels = this.labels;
    this.doughnutChartData = this.data;
    this.colors = [{ backgroundColor: this.color }];
  }

}
