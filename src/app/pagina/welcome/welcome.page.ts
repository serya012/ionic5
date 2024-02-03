// /src/app/pagina/welcome/welcome.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {
  welcomeMessages: any[] = [
    {
      title: 'Seja bem-vindo a Minha Festa, ou melhor, a sua Festa 😉',
      description: 'O mais novo aplicativo inovador para você gerenciar e personalizar as suas festas com seus companheiros',
      titleClass: 'custom-title',
      descriptionClass: 'custom-description',
    },
    {
      title2: 'Outra mensagem de boas-vindas',
      description2: 'Esta é outra mensagem interessante.',
      titleClass: 'other-title',
      descriptionClass: 'other-description',
    },
    // Adicione mais mensagens conforme necessário
  ];

  currentMessageIndex: number = 0;
  welcomeMessage: any = this.welcomeMessages[this.currentMessageIndex];

  constructor(private menuController: MenuController, private router: Router) { }

  ionViewWillEnter() {
    this.menuController.enable(false);
  }

  ionViewWillLeave() {
    this.menuController.enable(true);
  }

  Avancar() {
    if (this.currentMessageIndex < this.welcomeMessages.length - 1) {
      this.currentMessageIndex++;
      this.welcomeMessage = this.welcomeMessages[this.currentMessageIndex];
    } else {
      this.router.navigate(['/home']);
    }
  }
}
