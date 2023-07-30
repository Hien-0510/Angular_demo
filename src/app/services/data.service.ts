import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  listItems: Item[] = [
    {
      id: '1',
      name: 'China',
      price: 1000,
      description: 'Biển Đông là của chúng tôi',
      inStock: 1,
      image: 'china.jpeg'
    },
    {
      id: '2',
      name: 'Trung Quốc',
      price: 2000,
      description: 'Hoàng Sa là của chúng tôi',
      inStock: 2,
      image: 'china.jpeg'
    },
    {
      id: '3',
      name: 'Tàu Khựa',
      price: 3000,
      description: 'Trường Sa là của chúng tôi',
      inStock: 3,
      image: 'china.jpeg'
    },
    {
      id: '4',
      name: 'Trung Hoa Dân Quốc',
      price: 4000,
      description: 'Tôi là người Trung Hoa Dân Quốc',
      inStock: 4,
      image: 'china.jpeg'
    }
  ]; 

  addItem(item: Item) {
    this.listItems.push(item);
  }
}
