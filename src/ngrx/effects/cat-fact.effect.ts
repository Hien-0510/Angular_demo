import { Actions, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import * as CatActions from "../actions/cat-fact.action";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { CatService } from "src/app/services/cat.service";
import { ofType } from "@ngrx/effects";
import { Cat } from "src/app/models/cat-facts.model";




@Injectable()
export class CatEffect {
    constructor(private catService : CatService, private actions$ : Actions) {
    }

    getCats$ = createEffect(() => this.actions$.pipe(
        ofType(CatActions.getCats),
        switchMap((action) => this.catService.getCats(action.limit).pipe(
            map((data : Cat[]) => {
            
                return CatActions.getCatsSuccess({data : data})
            }),
            catchError((error : any) => of(CatActions.getCatsError({error : error})))
        ))
    ))
}