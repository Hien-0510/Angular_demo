export interface CatFact {
    id: string;
    fact: string;
    length: number;
  }
  export interface CatImage {
    id: string;
    url: string;
    width: number;
    height: number;
  }
  export interface catFacts{
    catFact: CatFact;
    catImage: CatImage;
  }