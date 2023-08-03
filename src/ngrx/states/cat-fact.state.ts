import { Cat } from 'src/app/models/cat-facts.model';

export interface catState{
    cats: Cat[];
    isLoading: boolean;
    error: any;
}