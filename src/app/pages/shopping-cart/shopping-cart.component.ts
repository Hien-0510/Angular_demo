import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  listItemCart: Item[] = []
  constructor(public dataService: DataService,private authService: AuthService, private router: Router) { 
    this.listItemCart = this.dataService.listCart
  }

  ngOnInit() {
    if(!this.authService.user) {
      alert('Please login to enter to shopping cart');
      this.router.navigate(['']);
    }
  }

  pay(){
    let totalPrice = this.dataService.cartTotal();
    alert(`Total price: ${totalPrice} $`);
  }
}
