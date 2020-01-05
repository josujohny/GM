import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroceryComponent } from './grocery.component';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';
// import { ViewcartComponent } from './viewcart/viewcart.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: GroceryComponent,
    children: [
      {
        path: 'list',
        component: GrocerylistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceryRoutingModule {}
