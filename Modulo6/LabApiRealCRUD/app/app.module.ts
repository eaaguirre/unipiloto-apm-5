import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import {AppRoutingModule} from "./routing/app-rounting.module";
import {ProductComponent} from "./component/product-list.component";
import { ProductDetailComponent } from './component/product-detail.component';
import {UserComponent} from "./component/user-list.component";
import {UserDetailComponent} from "./component/user-detail.component";
import {APP_BASE_HREF} from "@angular/common";
import {HttpModule} from "@angular/http";




@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
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
