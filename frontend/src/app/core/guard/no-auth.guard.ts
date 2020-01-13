import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class NoAuthGuard implements CanActivate {
  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('appuser'))

    // tslint:disable-next-line:no-non-null-assertion
    if (user && user.token !== ''){

      return true;

    }else{

      return false;

    }
  }
}
