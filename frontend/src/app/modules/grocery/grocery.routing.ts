import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroceryComponent } from './grocery.component';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { GrocerydetailsComponent } from './grocerydetails/grocerydetails.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'grocery',
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
      },
      {
        path: 'details',
        component: GrocerydetailsComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceryRoutingModule {}
