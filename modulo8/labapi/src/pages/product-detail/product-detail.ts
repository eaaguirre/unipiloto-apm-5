import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the ProductDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetailPage {

  public idproductselected:any;
  public idproductname:any;

  constructor(public navCtrl: NavController, public navPrms:NavParams) {
    this.idproductselected= this.navPrms.get("id");
      this.idproductname= this.navPrms.get("name");
  }

  ionViewDidLoad() {
    console.log('Hello ProductDetailPage Page');
  }

}
