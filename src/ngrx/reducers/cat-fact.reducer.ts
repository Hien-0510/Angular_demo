import { createReducer, on } from "@ngrx/store";
import { catState } from "../states/cat-fact.state";
import  * as CatAction from "../actions/cat-fact.action";
export const catInitState : catState = {
    cats : [],
    error : '',   
    isLoading : false
}
export const catReducer = createReducer(catInitState,
    on (CatAction.getCats, (state) => {
        return {
            ...state,
            isLoading : true
        }
    }),
    on (CatAction.getCatsSuccess, (state, {data}) => {
        return {
            ...state,
            isLoading : false,
            cats : data
        }
    }),
    on (CatAction.getCatsError, (state, {error}) => {
        return {
            ...state,
            isLoading : false,
            error : error
        }
    }),
)