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
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: 'Assertions',
        datasets: [
          { 
            data: 12,
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            data: 32,
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
