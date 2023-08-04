import { catFacts } from 'src/app/models/cat-facts.model';

export interface catState{
    catFacts: catFacts[];
    isLoading: boolean;
    error: any;
}