import { Component, Input, OnInit } from '@angular/core';
import {Product}   from '../model/product';
import { ProductService}  from '../services/product.service';

@Component({
    selector: 'products',
    templateUrl: 'app/templates/product-list.html',
   providers:[ProductService]
})

export class ProductComponent  implements OnInit{

    constructor(private ProductService: ProductService){}

    title = 'Products';

    selected: Product;
	/*products: Product[] = PRODUCTS;*/
    products: Product[];

	onSelect(product: Product) {
		this.selected = product;

    }

    ngOnInit(){
		this.ProductService.getProducts()
		.then(product=>this.products=product)
		.catch(error => console.log(error));
     }

}