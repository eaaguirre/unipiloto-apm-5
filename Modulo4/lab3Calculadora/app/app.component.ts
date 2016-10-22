import { Component } from '@angular/core';

 export class Ride {
 	airport: number;
 	app: number;
 	units: number;
 	festives: number;
    default:number;

 }

 

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/Calculadora.html'
})
export class AppComponent {

	title: string = "Tarifas Para El Taxi";

     Total: number=0;
	ride:Ride={
		airport:3900,
		app:700,
		units:50,
		festives:1900,
		default:4100

	};
   
	

	
}


