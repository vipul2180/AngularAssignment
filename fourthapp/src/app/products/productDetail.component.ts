import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../products/product.service';
import { IProduct } from './product';

@Component({
    templateUrl: './productDetail.component.html'
})

export class ProductDetailComponent implements OnInit {
  id : number;
  name: string;
  description: string;
  image: string;
  details: IProduct[];

  constructor(private _route: ActivatedRoute,
              private _productService: ProductService,
              private _router: Router){}
  
  ngOnInit(): void {
      this.id = this._route.snapshot.params['id'];
    
      this._productService.getProductDetails(this.id)
          .subscribe((data) => this.details = data);
  }  

  onBack(): void {
      this._router.navigate(['products']);
  }
   
}

/*
this._route
       .queryParams
       .subscribe((params) => {
           this.name = params['name'];
           this.description = params['desc'];
           this.image = params['img'];

       })*/