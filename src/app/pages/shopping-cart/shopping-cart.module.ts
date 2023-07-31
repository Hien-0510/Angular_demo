
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { SharedMaterialModule } from 'src/app/modules/shared';
import { ItemCardComponent } from 'src/app/components/item-card/item-card.component';
import { FormComponent } from 'src/app/components/form/form.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShoppingCartModule { }
