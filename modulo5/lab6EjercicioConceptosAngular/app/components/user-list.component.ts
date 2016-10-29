import { Component, Input,OnInit } from '@angular/core';
import  {User}   from  '../model/user';
import { UserService} from '../services/user.service';
import {Router} from "@angular/router";

@Component({
    selector: 'user-list',
    templateUrl: 'app/templates/user-list.html',
    providers:[UserService]
})

export class UserComponent implements OnInit {

    constructor(private router: Router,private UserService: UserService){}
    title = 'Users';
     /*users: User[] = USERS;*/
     users: User[];

     selected: User;

     getUsers() {
        this.UserService.getUsers().then(users => this.users = users);
    }

	onSelect(user: User) {
		this.selected = user;

    }

    ngOnInit(): void {
        this.getUsers();
    }
    gotoDetail(): void {
        this.router.navigate(['user/detail/', this.selected.id]);
    }

}