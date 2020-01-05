import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';

import { GroceryRoutingModule } from './grocery.routing';
import { GroceryComponent } from './grocery.component';
// import { ViewcartComponent } from './viewcart/viewcart.component';

@NgModule({
  declarations: [GroceryComponent, GrocerylistComponent],
  imports: [CommonModule, GroceryRoutingModule]
})
export class GroceryModule {}
