import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {UserComponent} from "../components/user-list.component";

import {ProductComponent} from "../components/product-list.component";
import {ProductDetailComponent} from "../components/product-detail.component";
import {UserDetailComponent} from "../components/user-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/user-list', pathMatch: 'full' },

    { path: 'user-list',  component:  UserComponent},
    { path: 'user/detail/:id', component: UserDetailComponent },
    { path: 'products', component: ProductComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent }
   
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}