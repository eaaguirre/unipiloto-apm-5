import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from "../../providers/user-service";
import { User } from "../../Model/user"

/*
  Generated class for the Usuarios page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
   providers: [UserService]
})
export class Usuarios {
users:User[];
  constructor(public navCtrl: NavController,private userservice:UserService) {}

  ionViewDidLoad() {
    console.log('Hello UsuariosPage Page');
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


}
