import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AssertResultDataSource } from './assert-result-datasource';

@Component({
  selector: 'app-assert-result',
  templateUrl: './assert-result.component.html',
  styleUrls: ['./assert-result.component.css']
})
export class AssertResultComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AssertResultDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new AssertResultDataSource(this.paginator, this.sort);
  }
}
