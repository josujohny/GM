import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryComponent } from './grocery.component';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { GroceryRoutingModule } from './grocery.routing';
import { SidebarComponent } from 'app/layout/sidebar/sidebar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GrocerydetailsComponent } from './grocerydetails/grocerydetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MaterialModule } from 'app/app.module';

@NgModule({
  declarations: [GroceryComponent, GrocerylistComponent, ViewCartComponent, SidebarComponent, CheckoutComponent, GrocerydetailsComponent],
  imports: [CommonModule,
     GroceryRoutingModule, CarouselModule.forRoot(), MaterialModule, FormsModule, ReactiveFormsModule
    ]
})
export class GroceryModule {}
