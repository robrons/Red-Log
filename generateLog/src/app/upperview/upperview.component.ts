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
    this.chart = new Chart('myChart', {
      type: 'doughnut',
      data: {
        datasets: [{
            data: [10, 30]
        }],
        labels: [
          'Red',
          'Yellow',
          'Blue'
      ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }],
        }
      }
    });
  }

}
