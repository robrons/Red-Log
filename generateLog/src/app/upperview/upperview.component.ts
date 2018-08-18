import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-upperview',
  templateUrl: './upperview.component.html',
  styleUrls: ['./upperview.component.css']
})
export class UpperviewComponent implements OnInit {

  chart = []; // This will hold our chart info

  constructor() { }
  ngOnInit() {
    this.chart = new Chart('asserPie', {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [10, 20],
          backgroundColor: ["#3cba9f", "#c45850"]
        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Pass',
          'Fail',
        ]
      }
    });
  }

}
