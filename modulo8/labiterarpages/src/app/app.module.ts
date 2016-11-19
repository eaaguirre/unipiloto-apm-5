import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Home} from '../pages/Home/Home';
import { Productos} from '../pages/Productos/Productos';
import { Usuarios} from '../pages/Usuarios/Usuarios';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Home,
    Productos,
    Usuarios
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Home,
    Productos,
    Usuarios

  ],
  providers: []
})
export class AppModule {}
