import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataSource } from '@angular/cdk/collections';
import { TransferService } from '../transfer.service';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Simple } from '../simple';

interface AppState {
  simple: Simple;
}

@Component({
  selector: 'app-upperview',
  templateUrl: './upperview.component.html',
  styleUrls: ['./upperview.component.css']
})

export class UpperviewComponent implements OnInit {

  simple: Observable<Simple>;
  dataSource = new StatDataSource(this.transferService);
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartType: string = 'doughnut';
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(
    private transferService: TransferService,
    private store: Store<AppState>
  ) {
    this.simple = this.store.select('post');
   }
  ngOnInit() {
  }
}

export class StatDataSource extends DataSource<number> {
  constructor(private transferService: TransferService) {
    super();
  }
  connect(): Observable<number[]> {
    return this.transferService.statChange;
  }
  disconnect() { }
}
