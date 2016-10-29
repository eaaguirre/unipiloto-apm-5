import { Component, Input } from '@angular/core';
import { USERS }  from '../mock/user-mock';
import  {User}   from  '../model/user';

@Component({
    selector: 'user-list',
    templateUrl: 'app/templates/user-list.html'
})

export class UserComponent {
    title = 'Users';
     users: User[] = USERS;
}