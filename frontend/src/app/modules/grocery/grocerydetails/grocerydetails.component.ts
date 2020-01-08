import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-grocerydetails',
  templateUrl: './grocerydetails.component.html',
  styleUrls: ['./grocerydetails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrocerydetailsComponent implements OnInit {

  constructor() { 
    setTheme('bs4');
  }

  ngOnInit() {
  }

}
