// /src/app/pagina/welcome/welcome.page.ts

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Certifique-se de importar corretamente

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {
  currentSection: string = 'instructions';

  constructor(private navCtrl: NavController) {}

  previousSection() {
    if (this.currentSection === 'authentication') {
      this.currentSection = 'instructions';
    }
  }

  nextSection() {
    if (this.currentSection === 'instructions') {
      this.currentSection = 'authentication';
    }
  }

  login() {
    // Adicione a lógica para redirecionar para a página de login
    this.navCtrl.navigateForward('/login');
  }

  createAccount() {
    // Adicione a lógica para redirecionar para a página de criação de conta
    this.navCtrl.navigateForward('/create-account');
  }
}
