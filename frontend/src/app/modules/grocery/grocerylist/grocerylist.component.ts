import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GroceryApiService } from '@shared/service/grocery-api.service';
import { Grocery } from './grocerylist';
import { environment } from 'environments/environment.prod';
// import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HttpErrorResponse, HttpClient } from '@angular/common/http';
// import { ApiService } from '@app/service/api.service';
import { map, merge, mergeMap } from 'rxjs/operators';
import { Subject } from 'rxjs'
import { Router } from '@angular/router';


@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrocerylistComponent implements OnInit {

  Grocery: any = [];
  constructor(private groceryService: GroceryApiService, router: Router) {

  }

  ngOnInit() {
    console.log(this.groceryList);
  }

  // tslint:disable-next-line:member-ordering
  groceryList = this.groceryService.getgroceryList().pipe();
}





