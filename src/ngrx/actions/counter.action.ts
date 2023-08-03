import { createAction, Action } from "@ngrx/store";
export const CounterActions = {
    increment: createAction('[Counter] Increment'),
    decrement : createAction('[Counter] Decrement'),
    reset : createAction('[Counter] Reset')
}