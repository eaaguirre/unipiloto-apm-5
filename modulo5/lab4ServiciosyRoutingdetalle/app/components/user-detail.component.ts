import {Component, OnInit} from '@angular/core';
import { User } from '../model/user';
import {UserService} from "../services/user.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'product-detail-app',
    templateUrl: 'app/templates/user-detail.html',
    providers: [UserService]
})

export class UserDetailComponent implements OnInit {

    user: User;
    constructor(
        private userservice: UserService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id =+params['id'];
            this.userservice.getUser(id)
                .then(user => this.user = user);
        });
    }
}