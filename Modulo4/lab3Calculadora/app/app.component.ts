import { Component } from '@angular/core';

 export class Ride {
 	aiport: number=3900;
 	app: number=700;
 	units: number=50;
 	festives: number=1900;
    default:number= 4100;
 }

 export class Option {
 	airport: string;
 	app: string;
 	units: string;
 	festives: string;
	total:string;
 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/Calculadora.html'
})
export class AppComponent {

	title: string = "Tarifas Para El Taxi";
	selected: Option;
	options:Option[]= OPTIONS;
	onSelect(option: Option) {
		this.selected = option;
   
	
}


