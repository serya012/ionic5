import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router se precisar redirecionar o usuário
import { AlertController } from '@ionic/angular'; // Importe o AlertController para exibir informações

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  entrar() {
    // Lógica de entrar na conta
    // Por exemplo, redirecionar para a página de login
    this.router.navigate(['/login']); // Redirecionar para a página de login
  }

  sair() {
    // Lógica de sair da conta
    // Por exemplo, limpar dados do usuário e redirecionar para a página inicial
    this.router.navigate(['/']); // Redirecionar para a página inicial
  }

  async informacao() {
    const alert = await this.alertController.create({
      header: 'Informações',
      message: 'Aqui estão as informações que você deseja mostrar.',
      buttons: ['OK']
    });

    await alert.present();
  }
}