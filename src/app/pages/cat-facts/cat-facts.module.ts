import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatFactsRoutingModule } from './cat-facts-routing.module';
import { CatFactsComponent } from './cat-facts.component';
import { SharedMaterialModule } from 'src/app/modules/shared';


@NgModule({
  declarations: [
    CatFactsComponent
  ],
  imports: [
    CommonModule,
    CatFactsRoutingModule,
    SharedMaterialModule
  ]
})
export class CatFactsModule { }
