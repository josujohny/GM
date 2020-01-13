import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { GroceryApiService } from '@shared/service/grocery-api.service';

@Component({
  selector: 'app-grocerydetails',
  templateUrl: './grocerydetails.component.html',
  styleUrls: ['./grocerydetails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrocerydetailsComponent implements OnInit {
  groceryDetails: string;
  details: any;
  id: string;

  constructor(
    private  route: ActivatedRoute, 
    private  router: Router, 
    private groceryService: GroceryApiService,
    private ref: ChangeDetectorRef
  ) { 
    setTheme('bs4');
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      console.log(params.get('_id'));
      this.id = params.get('_id');

    });

    this.loadDetails(this.id);
  }

  loadDetails(id)
  {
    this.groceryService.getgroceryDetails(id).subscribe(
      (result) => {
        this.details = result;
        console.log(result);
        this.ref.markForCheck();
      }
    )
  }

}
