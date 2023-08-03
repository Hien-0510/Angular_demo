
import { catFact } from 'src/app/models/cat-facts.model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CatService } from 'src/app/services/cat.service';
import { catFactAction } from '../actions/cat-fact.action';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class catFactEffect {
    constructor(private actions$: Actions, private catService: CatService) { }
    loadCatFacts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(catFactAction.loadCatFacts),
            switchMap(() =>
                this.catService.getCatFacts(140, 10).pipe(
                    switchMap((catFacts: any) => {
                        return this.catService.getCatImages(10).pipe(
                            map((catImages: any) => {
                                catFacts = catFacts['data'].map(
                                    (catFacts: catFact, index: number) => {
                                        return { ...catFacts, imageUrl: catImages[index]['url'] }; 
                                    }
                                );
                                return catFactAction.loadCatFactsSuccess(catFacts);
                            }),
                            catchError((error: string) => {
                                return of(catFactAction.loadCatFactsFailure(error));
                            })
                        );
                    })
                )
            )
        ))
}