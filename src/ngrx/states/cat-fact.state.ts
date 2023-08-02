import { catFact } from 'src/app/models/cat-facts.model';

export interface catFactState{
    catFact: catFact[];
    isLoading: boolean;
    error: string;
}