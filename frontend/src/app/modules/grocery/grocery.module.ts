import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryComponent } from './grocery.component';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { GroceryRoutingModule } from './grocery.routing';

@NgModule({
  declarations: [GroceryComponent, GrocerylistComponent, ViewCartComponent],
  imports: [CommonModule, GroceryRoutingModule]
})
export class GroceryModule {}
