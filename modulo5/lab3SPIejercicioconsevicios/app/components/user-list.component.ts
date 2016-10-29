import { Component, Input,OnInit } from '@angular/core';
import  {User}   from  '../model/user';
import { UserService} from '../services/user.service';

@Component({
    selector: 'user-list',
    templateUrl: 'app/templates/user-list.html',
    providers:[UserService]
})

export class UserComponent implements OnInit {

    constructor(private UserService: UserService){}
    title = 'Users';
     /*users: User[] = USERS;*/
     users: User[];

     ngOnInit(){
		this.UserService.getUsers()
		.then(users=>this.users=users)
		.catch(error => console.log(error));
     }

}