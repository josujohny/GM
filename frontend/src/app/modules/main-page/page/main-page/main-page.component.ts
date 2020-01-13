import { Component, OnInit } from '@angular/core';

import { setTheme } from 'ngx-bootstrap/utils';

import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class MainPageComponent implements OnInit {
  constructor() {
    setTheme('bs4');
  }

  itemsPerSlide = 5;
  singleSlideOffset = true;
  noWrap = true;
 
  slides = [
    {image: '/assets/bread.jpeg'},
    {image: '/assets/apple.jpeg'},
    {image: '/assets/pineapple.jpeg'},
    {image: '/assets/cake.jpeg'},
    {image: '/assets/harpic.jpeg'},
    {image: '/assets/dettol.jpeg'},
    {image: '/assets/bread.jpeg'},
    {image: '/assets/bread.jpeg'},
    {image: '/assets/bread.jpeg'},
    {image: '/assets/bread.jpeg'}
  ];

  ngOnInit() {}
}
