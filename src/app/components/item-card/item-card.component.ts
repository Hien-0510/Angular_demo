import { Item } from 'src/app/models/item.model';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input()
  item!: Item;
   itemInCart: Item[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {}

  addToCart(item: Item) {
    this.itemInCart.push(item);
    window.alert('Your product has been added to the cart!');
  }

}
 