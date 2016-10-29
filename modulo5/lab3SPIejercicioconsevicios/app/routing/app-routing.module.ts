import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {UserComponent} from "../components/user-list.component";

import {ProductComponent} from "../components/product-list.component";

const routes: Routes = [
    { path: '', redirectTo: '/user-list', pathMatch: 'full' },

    { path: 'user-list',  component:  UserComponent},
    { path: 'products', component: ProductComponent }
   
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}