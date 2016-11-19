import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProcductService } from "../../providers/procduct-service";
import { Product } from "../../Model/product"

/*
  Generated class for the Productos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
  providers: [ProcductService]
})
export class Productos {

  products: Product[];

  constructor(public navCtrl: NavController,private productService:ProcductService) {}


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

  ionViewDidLoad() {
    console.log('Hello ProductosPage Page');
  }

ngOnInit(): void {
        this.getProducts();
    }



}
