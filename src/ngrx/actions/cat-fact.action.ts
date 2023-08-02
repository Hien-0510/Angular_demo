import { createAction } from "@ngrx/store";
import { catFact } from "src/app/models/cat-facts.model";

export const catFactAction = {
    loadCatFacts: createAction('[CatFact] Load CatFacts'),
    loadCatFactsSuccess: createAction(
    '[CatFact] Load CatFacts Success', 
    (catFacts: catFact[]) => ({ catFacts })
    ),
    loadCatFactsFailure: createAction(
    '[CatFact] Load CatFacts Failure', 
    (error: string) => ({ error })
    )
}