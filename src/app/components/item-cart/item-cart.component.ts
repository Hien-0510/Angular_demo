import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss']
})
export class ItemCartComponent {
  @Input()
  item!: Item;

  itemInCart: Item[] = [];

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.itemInCart = this.dataService.listCart;
  }
  
  deleteCartItem(item: Item) {
    this.dataService.deleteCartItem(item);
  }

  increaseItem(item: Item) {
    this.dataService.increaseItem(item);
  }

  decreaseItem(item: Item) {
    this.dataService.decreaseItem(item);
  }

}
