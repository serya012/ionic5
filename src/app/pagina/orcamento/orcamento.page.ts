// orcamento.page.ts

import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.page.html',
  styleUrls: ['./orcamento.page.scss'],
})
export class OrcamentoPage {
  gasto: string = '';
  orcamento: string = '';
  items: any[] = []; // Adicione esta linha para declarar a variável items

  constructor(private navCtrl: NavController, private alertController: AlertController, private sharedService: SharedService) {
    this.items = this.sharedService.getOptions(); // Certifique-se de que os itens são buscados do SharedService
  }

  async salvar() {
    const selectedOptions = this.sharedService.getOptions();
    console.log('Opções selecionadas em Orcamento:', selectedOptions);

    if (this.gasto && this.orcamento) {
      this.mostrarAlerta('Salvo', 'Os dados foram salvos com sucesso.');
    } else {
      this.mostrarAlerta('Campos Vazios', 'Por favor, preencha os campos de gasto e orçamento.');
    }
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  orcamentod() {
    this.navCtrl.navigateForward('/orcamentod');
  }
}
