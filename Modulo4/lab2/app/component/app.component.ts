import { Component } from '@angular/core';
import { User } from '../model/user';


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