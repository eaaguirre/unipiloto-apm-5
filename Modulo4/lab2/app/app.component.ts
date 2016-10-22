import { Component } from '@angular/core';


export class User{
	name:string;
	id:number;
	phone:number;
}


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/user.html'
})
export class AppComponent {
	user: User = {
		name: "Edinson",
		id: 1,
		phone:3025480

		
	}


}