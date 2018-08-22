import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { TransferService } from '../transfer.service';
import { Observable, of } from 'rxjs';
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
  constructor(
    private transferService: TransferService
  ) { }

  dataSource = new UserDataSource(this.transferService);
  columnsToDisplay = ['Rule', 'Status'];
  ngOnInit() {
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

