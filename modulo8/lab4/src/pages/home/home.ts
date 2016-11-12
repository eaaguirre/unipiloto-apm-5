import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ListPage}   from  '../list/list'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

        
  }
  
   selected:any = false;
   

  product: product={
 	id:1,
 	name:"samsung",
 	type:"smartphone",
 	price:500000
 	

 }
  loadInfo() {
  	this.selected = true;
  }

  mostrar(){
    this.navCtrl.push(ListPage);
  }

 }


export class product{
  	id:number;
  	name:string;
  	type :string;
  	price:number ;
  }

 



