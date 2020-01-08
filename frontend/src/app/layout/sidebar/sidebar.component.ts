import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { VERSION, MatMenuTrigger } from '@angular/material';
import { LISTS } from './sidebar-list';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  // lists = LISTS;
  version = VERSION;
list = [
  {
    'id': 1,
    'value': 'Bakery'
  },
  {
    'id': 2,
    'value': 'Cleaner'
  },
  {
    'id': 3,
    'value': 'Frozen food'
  },
  {
    'id': 4,
    'value': 'Fruits'
  },
  {
    'id': 5,
    'value': 'Cosmetics'
  },
  {
    'id': 6,
    'value': 'Household'
  },
  {
    'id': 7,
    'value': 'School-Kit'
  },
  {
    'id': 8,
    'value': 'Clothings'
  },
  {
    'id': 9,
    'value': 'Vegetables'
  },
  {
    'id': 10,
    'value': 'Spices & Grams'
  }
];
  constructor() {}

  ngOnInit() {}

 


  
}
