import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroceryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
