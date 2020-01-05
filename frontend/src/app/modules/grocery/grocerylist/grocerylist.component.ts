import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrocerylistComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
