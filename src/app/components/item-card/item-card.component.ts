import { AuthService } from 'src/app/services/auth.service';
import { Item } from 'src/app/models/item.model';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
registerLocaleData(localeVi, 'vi');


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input()
  item!: Item;


  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  addToCart(item: Item) {
    if(!this.authService.user) {
      alert('Please login to add to cart');
      return;
    }
     this.dataService.addToCart(item);
  }

  updateItem(item: Item) {
    if(!this.authService.user) {
      alert('Please login to add to cart');
      return;
    }
    this.dataService.updateDoc(item);
  }

  deleteItem(item: Item) {
    if(!this.authService.user) {
      alert('Please login to add to cart');
      return;
    }
    this.dataService.deleteItem(item.id);
  }

  getItem(item: Item) {
    if(!this.authService.user) {
      alert('Please login to add to cart');
      return;
    }
    this.dataService.itemUpdate = item;
    console.log(this.dataService.itemUpdate);
  }

}
 