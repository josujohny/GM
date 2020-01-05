import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frozen-food',
  templateUrl: './frozen-food.component.html',
  styleUrls: ['./frozen-food.component.scss']
})
export class FrozenFoodComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  continue() {
    this.router.navigate(['frozen']);
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
