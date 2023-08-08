
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { SharedMaterialModule } from 'src/app/modules/shared';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule
  ]
})
export class ShoppingCartModule { }
