import { DataService } from './services/data.service';
import { Component } from '@angular/core';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lesson-4';

  listItems: Item[] = []

  constructor(protected dataService: DataService) {
    this.listItems = this.dataService.listItems;
  }

  addItem(item: Item) {
    this.dataService.addItem(item);
  }

  getItems() {
    return this.dataService.listItems;
  }

  clearCart() {
    return this.dataService.listItems = [];
  }

  deleteItem(item: Item) {
    this.dataService.listItems.splice(this.dataService.listItems.indexOf(item), 1);
  }

  total() {
    let total = 0;
    for (let i = 0; i < this.dataService.listItems.length; i++) {
      total += this.dataService.listItems[i].price;
    }
    return total;
  }

  close() {
    this.dataService.listItems = [];
  }

  totalCart() {
    let total = 0;
    for (let i = 0; i < this.dataService.listItems.length; i++) {
      total += this.dataService.listItems[i].price;
    }
    return total;
  }
  

}
