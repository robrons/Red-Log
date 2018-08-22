import * as SimpleActions from './simple.actions';
import { Simple } from './simple';

export type Action = SimpleActions.All;

const defauleState: Simple = {
    chartData: [10, 23, 50],
    Summary: ['', '', '']
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

        default:
            return state;
    }
}