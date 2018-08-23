import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { TransferService } from '../transfer.service';
import { BehaviorSubject, Observable, of as observableOf, merge } from 'rxjs';
import { Store } from '@ngrx/store';
import { Simple } from '../simple';
import { map } from 'rxjs/operators';

interface AppState {
  simple: Simple;
}


@Component({
  selector: 'app-assert-table',
  templateUrl: './assert-table.component.html',
  styleUrls: ['./assert-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AssertTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  simple: Observable<Simple>;

  constructor(
    private transferService: TransferService,
    private store: Store<AppState>,
    private changeDetectorRefs: ChangeDetectorRef
  ) {
    this.simple = this.store.select('post');
  }

  dataSource: UserDataSource;

  columnsToDisplay = ['Rule', 'Status'];

  ngOnInit() {
    this.transferService.dataChange.subscribe(result => {
    this.dataSource = new UserDataSource(this.transferService, this.paginator, this.sort);
    });
  }
}

export class UserDataSource extends DataSource<AssertResult> {

  data: Observable<AssertResult[]> = this.transferService.dataChange;

  rdata: AssertResult[];

  constructor(private transferService: TransferService,
    private paginator: MatPaginator, private sort: MatSort) {
    super();
  }
  connect(): Observable<AssertResult[]> {

    this.data.subscribe(result => {
      this.rdata = result;
    });

    const dataMutations = [
      observableOf(this.rdata),
      this.paginator.page,
      this.sort.sortChange
    ];

   this.paginator.length = this.rdata.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.rdata]));
    }));
  }

  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: AssertResult[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: AssertResult[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'Rule': return compare(a.Rule, b.Rule, isAsc);
        case 'Status': return compare(a.Status, b.Status, isAsc);
        default: return 0;
      }
    });
  }
}

export interface AssertResult {
  Rule: string;
  Status: string;
  Comment: string;
  Description: string;
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}