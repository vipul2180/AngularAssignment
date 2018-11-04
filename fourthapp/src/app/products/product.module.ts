import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { DiscountPipe } from './discount.pipe';
import { MyUpper } from './upperCase.pipe';
import { FilterProduct } from './filterProduct.pipe';
import { ProductDetailComponent } from './productDetail.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { RouterGuards } from './product.guard';

@NgModule({

    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductComponent},
            {path: 'productDetails/:id', canActivate: [RouterGuards], component: ProductDetailComponent} 
        ]),
        SharedModule
    ],
    declarations: [       
    ProductComponent,
    DiscountPipe,
    MyUpper,
    FilterProduct,
    ProductDetailComponent
    ],
    providers:[
        ProductService,
        RouterGuards
    ]
})

export class ProductModule{

}