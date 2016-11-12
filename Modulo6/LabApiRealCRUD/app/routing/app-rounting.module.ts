import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {UserComponent} from "../component/user-list.component";

import {ProductComponent} from "../component/product-list.component";
import {ProductDetailComponent} from "../component/product-detail.component";
import {UserDetailComponent} from "../component/user-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/products-list', pathMatch: 'full' },

    { path: 'user-list',  component:  UserComponent},

    { path: 'products-list', component: ProductComponent }

   
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}