export interface Item {
    id: string;
    name: string;
    price : number;
    description : string;
    inStock?: number;
    image: string;
    inCart?: number;
}