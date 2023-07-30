
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { SharedMaterialModule } from 'src/app/modules/shared';
import { ItemCardComponent } from 'src/app/components/item-card/item-card.component';
import { FormComponent } from 'src/app/components/form/form.component';


@NgModule({
  declarations: [
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    SharedMaterialModule,
  ]
})
export class ShoppingCartModule { }
