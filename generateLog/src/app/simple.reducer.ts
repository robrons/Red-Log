import * as SimpleActions from './simple.actions';
import { Simple } from './simple';
import {DataSource} from '@angular/cdk/collections';
export type Action = SimpleActions.All;

const defauleState: Simple = {
    tableData: undefined,
    chartData: [10, 23, 50],
    Summary: {'DNS_Name': '', 'Description': '', 'Cached URIs': '', 'Run_Time': ''}
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
}

export function simpleReducer(state: Simple = defauleState, action: Action) {
    console.log(action.type, state);

    switch (action.type) {
        case SimpleActions.UPDATE_CHART:
            return newState(state, { chartData: action.payload });

        case SimpleActions.UPDATE_SUMMARRY:
            return newState(state, { Summary: action.payload });

        case SimpleActions.UPDATE_TABLE:
            return newState(state, { tableData: action.payload });
        default:
            return state;
    }
}