import {createAction, props} from '@ngrx/store';
import { Cat } from 'src/app/models/cat-facts.model';
export const getCats = createAction(
    '[Cat] Get Cats', 
    props<{limit: number}>());
export const getCatsSuccess = createAction(
    '[Cat] Get Cats Success', 
    props<{data: Cat[]}>());
export const getCatsError = createAction(
    '[Cat] Get Cats Error', 
    props<{error: any}>());