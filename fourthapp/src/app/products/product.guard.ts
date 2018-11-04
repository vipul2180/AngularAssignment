import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { retry } from 'rxjs/operators';

@Injectable()

export class RouterGuards implements CanActivate{
    constructor(private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
       const id = +route.url[1].path;
       if(isNaN(id) || id < 1){
           alert('Invalid URL');
           this._router.navigate(['products']);

           return false;
       }
           return true;
    }
}