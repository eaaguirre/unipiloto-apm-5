import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Product} from "../Model/product";
import {Observable} from 'rxjs/Rx';

/*
  Generated class for the ProcductService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProcductService {

  constructor(public http: Http) {
    console.log('Hello ProcductService Provider');
  }

  private productsURI = 'http://138.68.0.83:7070/api/v1/product';
  private headers = new Headers({'Content-Type': 'application/json'});


  getProducts(): Observable<Product[]> {
        return this.http.get(this.productsURI + "/list")
            .map(
                response => response.json() as Product[]
                )
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }

}
