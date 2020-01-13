import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GroceryApiService } from '@shared/service/grocery-api.service';
import { Grocery } from './grocerylist';
import { environment } from 'environments/environment.prod';
// import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HttpErrorResponse, HttpClient } from '@angular/common/http';
// import { ApiService } from '@app/service/api.service';
import { map, merge, mergeMap } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs'
import { Router, ActivatedRoute } from '@angular/router';
import { CartApiService } from '@shared/service/cart-api.service';
import { MessageService } from '@shared/service/message.service';


@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrocerylistComponent implements OnInit {
  catName: any;
  Grocery: any = [];
  subscription: Subscription;
  grocery: any;
  grocerylist: any;
  category: any;
  // Grocery: any = [];
  constructor(private messageService: MessageService, private groceryapiService: GroceryApiService, private router: Router, private activatedRoute: ActivatedRoute, private ref: ChangeDetectorRef, private cartApi: CartApiService) {

    this.subscription = this.messageService.getCategory().subscribe(message => {

      alert(message.text);
      this.grocerylist = this.groceryapiService.getItemsWithCategory(message.text).pipe();
      this.ref.markForCheck();
      console.log(message);

    });
  }

  ngOnInit() {
    console.log('category', this.activatedRoute.snapshot.params.username);


    // observable way
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('category'));
      console.log('category');
      console.log(params.get(''));
      this.catName = params.get('category');
    });
    this.ref.markForCheck();

    this.grocerylist = this.groceryapiService.getgroceryList().pipe();
  }

  // tslint:disable-next-line:member-ordering
  groceryList = this.groceryapiService.getgroceryList().pipe();
  addToCart(item) {
    console.log(item)
    this.cartApi.addToCart(item);
    window.alert('item added to cart')
    // this.router.navigate(['/grocery/grocerylist/']);

  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
   }
}





