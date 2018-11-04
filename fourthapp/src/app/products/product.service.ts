import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// <6 import { Observable } from 'rxjs/Observable';
// <6 import { map } from 'rxjs/operator/map;

@Injectable()

export class ProductService {

    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _http: Http,
                private __http: HttpClient) {}

    private extractData(res: Response) {
        return res.json();
    }

    getProduct(): Observable<IProduct[]> {
        return this.__http.get<IProduct[]>(this._productUrl);
    }

    getProductDetails(id: number): Observable<IProduct[]>{
       return this.__http.get<IProduct[]>(`${this._productUrl}?productId=${id}`);
    }
}




/*

/// Using promises
getProduct(): Promise<IProduct[]> {
         return this._http.get(this._productUrl).toPromise().then((res) => res.json());
    }

// Observable using <6
getProduct(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((res) => res.json());
    }

    // Observabke >6
getProduct(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .pipe(map(this.extractData));
    }
*/
