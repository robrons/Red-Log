import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AssertResult } from './assert-table/assert-table.component';
import { UpperviewComponent } from './upperview/upperview.component';
import * as SimpleActions from './simple.actions';
import { Store } from '@ngrx/store';
import { Simple } from './simple';
import {DataSource} from '@angular/cdk/collections';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';

interface AppState {
  simple: Simple;
}

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private store: Store<AppState>) {
  }

  dataChange: BehaviorSubject<AssertResult[]> = new BehaviorSubject<AssertResult[]>([]);
  summaryData: any;

  setData(data) {
    this.summaryData = data[data.length - 1];
    this.dataChange.next(data.slice(0, data.length - 2));
    this.changeTable(new MatTableDataSource(data));
    const stat: number[] = [data.filter(value => value.Status === 'PASS').length,
    data.filter(value => value.Status === 'WARN').length, data.filter(value => value.Status === 'FAIL').length];
    this.changeStat(stat);
    this.changeSumm(this.summaryData);
  }

  get data(): AssertResult[] {
    return this.dataChange.value;
  }

  changeStat(stat: number[]) {
    this.store.dispatch(new SimpleActions.UpdateChart(stat));
  }

  changeTable(tableData: MatTableDataSource<any>) {
    this.store.dispatch(new SimpleActions.UpdateTable(tableData));
  }

  changeSumm(summaryData: string[]) {
    this.store.dispatch(new SimpleActions.UpdateSummary(summaryData));
  }
}