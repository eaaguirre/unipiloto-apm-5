import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
	selector: 'user-detail',
	templateUrl: 'app/templates/user-detail.html'
})

export class UserDetailComponent {
	user: User;
}