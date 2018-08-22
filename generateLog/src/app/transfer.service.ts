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

  setData(data) {
    this.dataChange.next(data);
    this.changeTable(new MatTableDataSource(data));
    const stat: number[] = [data.filter(value => value.Status === 'PASS').length,
    data.filter(value => value.Status === 'WARN').length, data.filter(value => value.Status === 'FAIL').length];
    this.changeStat(stat);
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

}