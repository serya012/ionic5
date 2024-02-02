// orcamentod.page.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-orcamentod',
  templateUrl: './orcamentod.page.html',
  styleUrls: ['./orcamentod.page.scss'],
})
export class OrcamentodPage {

  categoriaSelecionada: string | null = null;
  mostrarOpcoesMenu = false;

  mostrarOpcoes(categoria: string) {
    this.mostrarOpcoesMenu = this.categoriaSelecionada !== categoria || !this.mostrarOpcoesMenu;
    this.categoriaSelecionada = this.mostrarOpcoesMenu ? categoria : null;
  }
  // Adicione aqui suas opções específicas de compra para cada categoria
  // Lembre-se de ajustar conforme necessário.

  opcoesBolos = [
    { nome: 'Bolo 1', preco: 'R$20' },
    { nome: 'Bolo 2', preco: 'R$25' },
    // Adicione mais opções conforme necessário
  ];

  opcoesBebidas = [
    { nome: 'Bebida 1', preco: 'R$5' },
    { nome: 'Bebida 2', preco: 'R$8' },
    // Adicione mais opções conforme necessário
  ];

  opcoesDecoracao = [
    { nome: 'Enfeite 1', preco: 'R$15' },
    { nome: 'Enfeite 2', preco: 'R$10' },
    // Adicione mais opções conforme necessário
  ];

  opcoesComidas = [
    { nome: 'Comida 1', preco: 'R$10' },
    { nome: 'Comida 2', preco: 'R$12' },
    // Adicione mais opções conforme necessário
  ];

}
