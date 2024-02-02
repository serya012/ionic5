// /src/app/pagina/welcome/welcome.page.ts

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {
  constructor(private navCtrl: NavController) {}

  skipWelcome() {
    // Adicione a lógica para redirecionar para a próxima página (por exemplo, a página principal)
    this.navCtrl.navigateForward('/home');
  }
}
