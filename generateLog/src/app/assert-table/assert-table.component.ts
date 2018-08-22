import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { TransferService } from '../transfer.service';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Simple } from '../simple';

interface AppState {
  simple: Simple;
}


@Component({
  selector: 'app-assert-table',
  templateUrl: './assert-table.component.html',
  styleUrls: ['./assert-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AssertTableComponent implements OnInit {
  simple: Observable<Simple>;

  constructor(
    private transferService: TransferService,
    private store: Store<AppState>
  ) {
    this.simple = this.store.select('post');
   }

   dataSource = this.store.select(state => state.simple.tableData).;

   @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay = ['Rule', 'Status'];
  ngOnInit() {
    this.dataSource.sort = this.store.select(state => state.simple.tableData.sort);
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private transferService: TransferService) {
    super();
  }
  connect(): Observable<AssertResult[]> {
    return this.transferService.dataChange;
  }
  disconnect() {}
}

export interface AssertResult {
  Rule: string;
  Status: string;
  Comment: string;
  Description: string;
}

