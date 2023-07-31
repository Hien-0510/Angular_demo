import { Item } from 'src/app/models/item.model';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';



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
    private dataService: DataService,
  ) {}

  ngOnInit(): void {}

  addToCart(item: Item) {
    this.dataService.addToCart(item);
  }

}
 