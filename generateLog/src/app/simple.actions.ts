import { Action } from '@ngrx/store';

export const UPDATE_CHART = '[Simple] Update_Chart';
export const UPDATE_SUMMARRY = '[Simple] Update_Summary';

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

export type All
    = UpdateChart
    | UpdateSummary;