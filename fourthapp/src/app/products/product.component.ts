import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    // styles: ['thead{color:red}', 'h3{color:olive}'],
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    title: String = '*****Product List';
    showImage: Boolean = false;
    filterText: String ;
    imageWidth: Number = 70;
    products: IProduct[];

    constructor(private _productService: ProductService) {}

    ngOnInit(): void {
        this._productService.getProduct()
            .subscribe((data) => this.products = data);
    }

    toggleImage(): void {
        this.showImage  = !this.showImage;
    }

    onDataRecieve(message: string): void {
        this.title = 'Product List>>>>>>' + message;
    }
}



/*
ngOnInit(): void {
        this._productService.getProduct()
            .then((data) => this.products = data);
    }

one way
--Data binding   {{ }}
--Property Binding [ ]
--Event Binding ()
two way  [( )]


var a = 10
let b = 10
const c = 10

function add(){
    a = 12
    if(){
        let b = 12
    }
}


if(){
    let a = 12
}

function add(){
    return a+b
}

let add = () => {return a+b}

function calc(a,b){

    this.add = a+b
}

if(a== true)
if(a)
if(!a)

is way of getting the intsnace of object or element from external sourece
rather than creating itself.
*/
