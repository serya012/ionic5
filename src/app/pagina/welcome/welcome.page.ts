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
      description: 'Aqui você pode criar e personalizar suas festas de maneira única!',
      descriptionClass: 'custom-description',
    },
    {
      title: 'Dicas para a sua festa perfeita',
      description: 'Descubra sugestões e truques para tornar sua festa inesquecível.',
      titleClass: 'other-title',
      descriptionClass: 'other-description',
    },
    {
      title: 'Decoração única',
      description: 'Inspire-se em ideias de decoração para uma festa com a sua cara.',
      titleClass: 'custom-title',
      descriptionClass: 'custom-description',
    },
    {
      title: 'Receitas incríveis',
      description: 'Descubra receitas deliciosas para impressionar seus convidados.',
      titleClass: 'other-title',
      descriptionClass: 'other-description',
    },
    {
      title: 'Agradecemos por escolher o App Festa',
      description: 'Esperamos que seu evento seja incrível! Divirta-se!',
      titleClass: 'other-title',
      descriptionClass: 'other-description',
    },
  ];
  

  remainingMessages: number = this.welcomeMessages.length;
  currentMessageIndex: number = 0;
  welcomeMessage: any = this.welcomeMessages[this.currentMessageIndex];

  constructor(private menuController: MenuController, private router: Router) {}

  ionViewWillEnter() {
    this.menuController.enable(false);
  }

  ionViewWillLeave() {
    this.menuController.enable(true);
  }

  generateRandomMessage() {
    const randomIndex = Math.floor(Math.random() * this.welcomeMessages.length);
    return this.welcomeMessages.splice(randomIndex, 1)[0];
  }

  Avancar() {
    if (this.remainingMessages > 0) {
      this.welcomeMessage = this.generateRandomMessage();
      this.remainingMessages--;
    } else {
      this.router.navigate(['/home']);
    }
  }
}
