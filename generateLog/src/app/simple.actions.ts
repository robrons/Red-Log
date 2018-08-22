import { Action } from '@ngrx/store';
import {DataSource} from '@angular/cdk/collections';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';

export const UPDATE_CHART = '[Simple] Update_Chart';
export const UPDATE_SUMMARRY = '[Simple] Update_Summary';
export const UPDATE_TABLE = '[Simple] Update_Table';

export class UpdateChart implements Action {
    readonly type = UPDATE_CHART;

    constructor(public payload: number[]) {
    }
}

export class UpdateSummary implements Action {
    readonly type = UPDATE_SUMMARRY;

    constructor(public payload: string[]) {
    }
}

export class UpdateTable implements Action {
    readonly type = UPDATE_TABLE;

    constructor(public payload: MatTableDataSource<any>) {
    }
}
export type All
    = UpdateChart
    | UpdateSummary
    | UpdateTable;