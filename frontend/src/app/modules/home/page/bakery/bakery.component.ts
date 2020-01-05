import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.scss']
})
export class BakeryComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  continue() {
    // this.router.navigate(['bakery'])
    window.alert('hhh');
  }
  addCart() {
    this.router.navigate(['/home/cart']);
  }
  logout() {
    this.router.navigate(['login']);
  }
  back() {
    this.router.navigate(['home']);
  }
}
