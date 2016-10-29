import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {UserComponent} from "../components/user-list.component";

import {ProductComponent} from "../components/product-list.component";

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },

    { path: 'users-list',  component:  UserComponent},
    { path: 'products-list', component: ProductComponent }
   
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}