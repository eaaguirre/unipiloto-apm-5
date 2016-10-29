import { Component, Input } from '@angular/core';
import {PRODUCTS} from  '../mock/product-mock';
import {Product}   from '../model/product';

@Component({
    selector: 'products',
    templateUrl: 'app/templates/product-list.html'
})

export class ProductComponent {
    title = 'Products';

    selected: Product;
	products: Product[] = PRODUCTS;

	onSelect(product: Product) {
		this.selected = product;

}
}