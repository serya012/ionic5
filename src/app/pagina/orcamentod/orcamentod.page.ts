// orcamentod.page.ts

import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-orcamentod',
  templateUrl: './orcamentod.page.html',
  styleUrls: ['./orcamentod.page.scss'],
})
export class OrcamentodPage {

  categoriaSelecionada: string | null = null;

  opcoesBolos = [
    { nome: 'Bolo de Chocolate', preco: 'R$50', selecionado: false },
    { nome: 'Bolo de Morango', preco: 'R$60', selecionado: false },
    { nome: 'Bolo de Coco', preco: 'R$45', selecionado: false },
    { nome: 'Bolo de Baunilha', preco: 'R$55', selecionado: false },
    // Adicione mais opções conforme necessário
  ];

  opcoesBebidas = [
    { nome: 'Refrigerante', preco: 'R$5', selecionado: false },
    { nome: 'Suco Natural', preco: 'R$8', selecionado: false },
    { nome: 'Coquetel', preco: 'R$10', selecionado: false },
    { nome: 'Água Mineral', preco: 'R$3', selecionado: false },
    // Adicione mais opções conforme necessário
  ];

  opcoesDecoracao = [
    { nome: 'Balões Coloridos', preco: 'R$20', selecionado: false },
    { nome: 'Velas Decorativas', preco: 'R$15', selecionado: false },
    { nome: 'Centro de Mesa Floral', preco: 'R$30', selecionado: false },
    { nome: 'Decoração com Fitas', preco: 'R$25', selecionado: false },
    // Adicione mais opções conforme necessário
  ];

  opcoesComidas = [
    { nome: 'Mini Sanduíches', preco: 'R$40', selecionado: false },
    { nome: 'Canapés Variados', preco: 'R$60', selecionado: false },
    { nome: 'Finger Foods', preco: 'R$25', selecionado: false },
    { nome: 'Petiscos Especiais', preco: 'R$35', selecionado: false },
    // Adicione mais opções conforme necessário
  ];

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private sharedService: SharedService
  ) {}

  mostrarOpcoes(categoria: string) {
    this.categoriaSelecionada = this.categoriaSelecionada !== categoria ? categoria : null;
  }

  selecionarTodos(opcoes: any[]) {
    const algumNaoSelecionado = opcoes.some(opcao => !opcao.selecionado);
  
    for (const opcao of opcoes) {
      opcao.selecionado = algumNaoSelecionado;
    }
  }

  salvarItens() {
    const selectedOptions: any[] = this.collectSelectedOptions();
    this.sharedService.addOptions(selectedOptions);
    this.mostrarAlerta('Salvo', 'Itens salvos com sucesso.');
    this.navCtrl.navigateBack('/orcamento'); // Adiciona essa linha para voltar para a página de orcamento após salvar
  }

  collectSelectedOptions(): any[] {
    const selectedOptions: any[] = [];

    [this.opcoesBolos, this.opcoesBebidas, this.opcoesDecoracao, this.opcoesComidas].forEach(opcoesCategoria => {
      opcoesCategoria.filter(opcao => opcao.selecionado).forEach(opcao => {
        selectedOptions.push(opcao);
      });
    });

    return selectedOptions;
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
