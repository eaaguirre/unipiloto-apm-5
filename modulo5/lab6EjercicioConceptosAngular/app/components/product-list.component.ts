import { Component, Input, OnInit } from '@angular/core';
import {Product}   from '../model/product';
import { ProductService}  from '../services/product.service';
import {Router} from "@angular/router";

@Component({
    selector: 'products',
    templateUrl: 'app/templates/product-list.html',
   providers:[ProductService]
})

export class ProductComponent  implements OnInit{

    constructor(private router: Router,private ProductService: ProductService){}

    title = 'Products';

    selected: Product;
	/*products: Product[] = PRODUCTS;*/
    products: Product[];

    getProducts() {
        this.ProductService.getProducts().then(products => this.products = products);
    }

	onSelect(product: Product) {
		this.selected = product;

    }

    ngOnInit(): void {
        this.getProducts();
    }
    gotoDetail(): void {
        this.router.navigate(['product/detail/', this.selected.id]);
    }

}