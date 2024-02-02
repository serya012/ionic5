import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  entrar() {
    this.router.navigate(['/perfil']);
  }

  sair() {
    this.router.navigate(['/']);
  }

  
  async alterarConta() {
    const alert = await this.alertController.create({
      header: 'Alterar Email',
      subHeader: 'Digite o novo endereço de e-mail:',
      inputs: [
        {
          name: 'novoEmail',
          type: 'text',
          placeholder: 'Novo E-mail'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Alteração de e-mail cancelada');
          }
        },
        {
          text: 'Salvar',
          handler: (data) => {
            // Lógica para salvar o novo e-mail
            console.log('Novo E-mail:', data.novoEmail);
          }
        }
      ]
    });

    await alert.present();
  }
}
