import { createReducer, on } from "@ngrx/store";
import { counterState } from "../states/counter.state";
import {counterAction } from "../actions/counter.action";

export const counterInitState: counterState = {
    count: 0,
    isLoading: false,
    error: '',
}

export const counterReducer = createReducer(counterInitState,
    on(counterAction.increment, (state) => ({
        ...state,
        count: state.count + 1,
    })),
);