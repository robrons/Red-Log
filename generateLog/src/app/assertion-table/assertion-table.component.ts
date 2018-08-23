import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AssertionTableDataSource } from './assertion-table-datasource';

@Component({
  selector: 'app-assertion-table',
  templateUrl: './assertion-table.component.html',
  styleUrls: ['./assertion-table.component.css']
})
export class AssertionTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AssertionTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new AssertionTableDataSource(this.paginator, this.sort);
  }
}
