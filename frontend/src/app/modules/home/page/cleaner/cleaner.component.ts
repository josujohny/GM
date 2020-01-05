import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cleaner',
  templateUrl: './cleaner.component.html',
  styleUrls: ['./cleaner.component.scss']
})
export class CleanerComponent implements OnInit {
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
