import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-privacidade',
  templateUrl: './privacidade.page.html',
  styleUrls: ['./privacidade.page.scss'],
})
export class PrivacidadePage {

  constructor(private navCtrl: NavController) {}

  autorizar() {
    // Lógica para processar a autorização
    console.log('Usuário autorizou');
    // Substitua '/home' pela página principal do seu app
    this.navCtrl.navigateRoot('/home');
  }

  naoAutorizar() {
    // Lógica para lidar com a não autorização
    console.log('Usuário não autorizou');
    // Substitua '/' pela página inicial ou de saída do seu app
    this.navCtrl.navigateRoot('/welcome');
  }
}
