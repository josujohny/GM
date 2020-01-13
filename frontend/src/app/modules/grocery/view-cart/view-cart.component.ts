import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery';
import * as myjQuery from 'jquery';
import { Router } from '@angular/router';
import { CartApiService } from '@shared/service/cart-api.service';
// declare var $: any;

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {

  cartItem: any;
  cItem: any;
  items: any;
  subtotal: any;
  constructor(private cartApi: CartApiService, private ref: ChangeDetectorRef, private router: Router) {}

  ngOnInit() {
    this.cartApi.findTotal();
    this.cartItem = JSON.parse(localStorage.getItem('cart1'));
    this.subtotal = this.cartApi.subTotal();
 
    }

    deleteitem(deleteitemName) {
      console.log(deleteitemName);
      this.cartApi.removeById(deleteitemName);
      this.cartItem = this.cartApi.getCartItems();
      this.cartApi.findTotal();
      this.subtotal = this.cartApi.subTotal();
      console.log('cartItem', this.cartItem);
      this.ref.markForCheck(); 
  
    }
  
    remove(item){
      this.cartApi.removeItem(item);
     
      this.cartItem = this.cartApi.getCartItems();
      // debugger;
      this.cartApi.findTotal();
      this.subtotal = this.cartApi.subTotal();
      console.log('cartItem', this.cartItem);
      this.ref.markForCheck(); 
    }
    add(item){
      this.cartApi.addToCart(item);
      this.cartItem = this.cartApi.getCartItems();
      this.cartApi.findTotal();
      this.subtotal = this.cartApi.subTotal();
      console.log('cartItem', this.cartItem);
      this.ref.markForCheck(); 
  
      
    }

  

  checkout(){
    this.router.navigate(['/grocery/checkout'])
  }
}
