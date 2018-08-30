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
  allData: any;

  setData(data) {
    this.allData = data;
    this.summaryData = data['Summary'];
    const tableData = [];
    for (const rule of Object.keys(data)) {
      if (rule !== 'Summary') {
      const value = data[rule];
      const map = {'Rule': rule, 'Comment': value.Comment, 'Status': value.Status, 'Description': value.Description};
      tableData.push(map);
      }
    }
    this.dataChange.next(tableData);
    const stat: number[] = [tableData.filter(value => value.Status === 'PASS').length,
    tableData.filter(value => value.Status === 'WARN').length, tableData.filter(value => value.Status === 'FAIL').length];
    this.changeStat(stat);
    this.changeSumm(this.summaryData);
  }

  changeData(stat) {
    const data = this.allData;
    const tableData = [];
    for (const rule of Object.keys(data)) {
      if (rule !== 'Summary' && data[rule].Status === stat) {
      const value = data[rule];
      const map = {'Rule': rule, 'Comment': value.Comment, 'Status': value.Status, 'Description': value.Description};
      tableData.push(map);
      }
    }
    this.dataChange.next(tableData); 
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