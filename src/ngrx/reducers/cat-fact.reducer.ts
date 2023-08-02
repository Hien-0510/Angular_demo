import { createReducer, on } from "@ngrx/store";
import { catFactAction } from "../actions/cat-fact.action";
import { catFactState } from "../states/cat-fact.state";

export const initialState: catFactState = {
    catFact: [],
    isLoading: false,
    error: '',
};

export const catFactReducer = createReducer(initialState, 
    on(catFactAction.loadCatFacts, (state) => (
    {...state, isLoading: true})),
    on(catFactAction.loadCatFactsSuccess, (state, { catFacts }) => (
    {...state, catFacts, isLoading: false})),
    on(catFactAction.loadCatFactsFailure, (state, { error }) => (
    {...state, error, isLoading: false}))
);