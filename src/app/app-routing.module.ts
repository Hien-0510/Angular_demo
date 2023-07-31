import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'shopping-cart', loadChildren: () => import('./pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) }, { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'counter', loadChildren: () => import('./pages/counter/counter.module').then(m => m.CounterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
