

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './components/app.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {ProductComponent} from "./components/product-list.component";
import {UserComponent} from "./components/user-list.component";
import {ProductDetailComponent} from "./components/product-detail.component";
import {UserDetailComponent} from "./components/user-detail.component";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      ProductComponent,
      UserComponent,
      ProductDetailComponent,
      UserDetailComponent
      
  ],
  providers: [
      {
          provide: APP_BASE_HREF, useValue : '/'
      }
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
