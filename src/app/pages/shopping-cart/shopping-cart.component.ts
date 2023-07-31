import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  listItems: Item[] = []
  constructor(public dataService: DataService, ) { 
    this.listItems = this.dataService.listItems
  }
}
