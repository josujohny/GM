import { Component, OnInit } from '@angular/core';

import { environment } from '@env';
import { Observable } from 'rxjs';
import { ThemeService } from 'app/core/service/theme.service';
import { Router } from '@angular/router';
import { MessageService } from '@shared/service/message.service';
import { GroceryApiService } from '@shared/service/grocery-api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // public version = environment.version;
  // public repoUrl = 'https://github.com/mathisGarberg/angular-folder-structure';
  // public isDarkTheme$: Observable<boolean>;

  // navItems = [
  //   { link: '/dashboard/home', title: 'Home' },
  //   { link: '/about', title: 'About' },
  //   { link: '/contact', title: 'Contact' },
  //   { link: '/contact', title: 'View Cart' }
  // ];
  categorylist: any;
  constructor(private groceryService: GroceryApiService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    // this.isDarkTheme$ = this.themeService.getDarkTheme();
    console.log(this.categorylist);
    this.categorylist = this.groceryService.getcategoryList().pipe();
    console.log(this.categorylist);
  }

  // toggleTheme(checked: boolean) {
  //   this.themeService.setDarkTheme(checked);
  // }

  navigatelistpage(name) {
    this.router.navigateByUrl('/grocery/grocerylist/' + name);
    this.messageService.sendCategory(name);
  }
}
