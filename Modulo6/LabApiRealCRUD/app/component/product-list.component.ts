import { Component } from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from "../service/product.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/product-list.html',
    providers: [ProductService]
})
export class ProductComponent {
	title: string = "PRODUCTS";

    selectedproduct: Product;
    products: Product[];

    constructor(private productService: ProductService) {

        
    }
    product:Product ={
        id: 0,
    name: "", 
    type: "",
    
    quantity: 0,
    price: 0,
    url:""
    }



    getProducts() {
        this.productService.getProducts()
            .subscribe(
            products => {
                this.products = products;
            },

            error => {
                console.log(error);
            }
        );
    }

    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Product){
        this.selectedproduct = product;
    }

    add(product: Product): void {
        product = product;
        if (!product.name) { return; }
        this.productService.create(product)
            .subscribe(product => {
                this.products.push(product);
                this.selectedproduct = null;
            });
    }

}