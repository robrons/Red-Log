import {DataSource} from '@angular/cdk/collections';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
export interface Simple {
    chartData: number[];
    tableData: MatTableDataSource<any>;
    Summary: any;
}