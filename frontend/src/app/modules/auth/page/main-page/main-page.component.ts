import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { CarouselComponent } from 'ngx-bootstrap';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  // @ViewChild(CarouselComponent) myCarousel: CarouselComponent;
  // name = 'Angular';
  // masterArray = ['https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg',
  //   'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg',
  //   'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg',
  //   'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg',
  //   'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg',
  //   'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg',
  //   'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg',
  //   'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg',
  // ];
  // imagesArray = ['https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg',
  //   'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg',
  // ];
  // loopcomplete = false;
  // itemsPerSlide = 2;
  // singleSlideOffset = true;
  // noWrap = true;
  // activeRange = 0;

  // constructor() {
  //   setTheme('bs4');
  //  }

  // ngOnInit() {
  // }

  //   gotRangeChange() {
  //   if (!this.loopcomplete) {

  //     if (this.activeRange + 2 < this.masterArray.length) {
  //       this.activeRange = this.activeRange + 2;
  //       this.imagesArray = this.imagesArray.concat(this.masterArray[this.activeRange]);
  //       this.imagesArray = this.imagesArray.concat(this.masterArray[this.activeRange + 1]);
  //     } else {
  //       this.loopcomplete = true;
  //     }
  //   }

  // }
}
