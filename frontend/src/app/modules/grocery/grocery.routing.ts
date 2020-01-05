import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroceryComponent } from './grocery.component';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'grocerylist',
    pathMatch: 'full'
  },
  {
    path: '',
    component: GroceryComponent,
    children: [
      {
        path: 'grocerylist',
        component: GrocerylistComponent
      },
      {
        path: 'viewcart',
        component: ViewCartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceryRoutingModule {}
