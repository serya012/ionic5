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
    },
    {
      title: 'Outra mensagem de boas-vindas',
      description: 'Esta é outra mensagem interessante.',
    },
    {
      title: 'Outra mensagem defefefef boas-vindas',
      description: 'Esta é outra mensagem interessante.',
    },
    {
      title: 'Outra mensagem de boas-vindas',
      description: 'Esta é outra mendfdfsagem interessante.',
    },
    {
      title: 'Outra mensagem de boas-vindas',
      description: 'Esta é outra mensagdfgdfdfgem interessante.',
    },
    // Adicione mais mensagens conforme necessário
  ];

  currentMessageIndex: number = 0;
  welcomeMessage: any = this.welcomeMessages[this.currentMessageIndex];

  constructor(private menuController: MenuController, private router: Router) {}

  ionViewWillEnter() {
    // Desativar o menu lateral enquanto estiver na página de boas-vindas
    this.menuController.enable(false);
  }

  ionViewWillLeave() {
    // Reativar o menu lateral ao sair da página de boas-vindas
    this.menuController.enable(true);
  }

  skipWelcome() {
    if (this.currentMessageIndex < this.welcomeMessages.length - 1) {
      this.currentMessageIndex++;
      this.welcomeMessage = this.welcomeMessages[this.currentMessageIndex];
    } else {
      // Navegar para a página "home"
      this.router.navigate(['/home']);
    }
  }
}
