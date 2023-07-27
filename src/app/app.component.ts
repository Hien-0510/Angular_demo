import { Component } from '@angular/core';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lesson-4';

  listItems: Item[] = [
    {
      name: 'China',
      price: 1000,
      description: 'Biển Đông là của chúng tôi',
      quantity: 1
    },
    {
      name: 'Trung Quốc',
      price: 2000,
      description: 'Hoàng Sa là của chúng tôi',
      quantity: 2
    },
    {
      name: 'Tàu Khựa',
      price: 3000,
      description: 'Trường Sa là của chúng tôi',
      quantity: 3
    },
    {
      name: 'Trung Hoa Dân Quốc',
      price: 4000,
      description: 'Tôi là người Trung Hoa Dân Quốc',
      quantity: 4
    }
  ]; 

  constructor() {}
}
