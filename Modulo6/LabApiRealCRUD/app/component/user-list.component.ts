import { Component } from '@angular/core';
import { User } from '../model/user';
import {UserService} from "../service/user.service";

@Component({
    selector: 'user-list',
    templateUrl: 'app/templates/user-list.html',
    providers: [UserService]
})
export class UserComponent {
	title: string = "USERS";

    selecteduser: User;
    users: User[];

    constructor(private userservice: UserService) {

    }

    getUsers() {
        this.userservice.getUsers()
            .subscribe(
            users => {
                this.users = users;
            },

            error => {
                console.log(error);
            }
        );
    }

    ngOnInit(): void {
        this.getUsers();
    }

    onSelect(user: User){
        this.selecteduser = user;
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.userservice.create(name)
            .subscribe(user => {
                this.users.push(user);
                this.selecteduser = null;
            });
    }

}