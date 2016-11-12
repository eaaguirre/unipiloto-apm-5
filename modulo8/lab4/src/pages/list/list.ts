import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Service} from "../../providers/service";
import { Product } from '../../model/product';
import {ProductDetailPage}   from  '../product-detail/product-detail'

/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [Service]
})
export class ListPage {
  products: Product[];
  constructor(public navCtrl: NavController,private productService:Service) {}

  ionViewDidLoad() {
    console.log('Hello ListPage Page');
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

  ProductDetailPage(){
    this.navCtrl.push(ProductDetailPage);
  }

}
