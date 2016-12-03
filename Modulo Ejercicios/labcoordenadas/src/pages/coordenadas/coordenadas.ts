import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dialogs ,Geolocation} from 'ionic-native';

/*
  Generated class for the Coordenadas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coordenadas',
  templateUrl: 'coordenadas.html'
})
export class CoordenadasPage {


  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CoordenadasPage Page');
  }

    latitude:number=0
   longitude:number=0

  showlocation() {

    Geolocation.getCurrentPosition().then(resp => {
      let latitude = resp.coords.latitude;
      let longitude = resp.coords.longitude;
      console.log('latitude'+latitude,'logitude'+ longitude);
      Dialogs.alert('La latitud es:'+ this.latitude +' y la longitud es: '+ this.longitude +'', 'Alert!', 'Mostrando...');
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }



     


}
