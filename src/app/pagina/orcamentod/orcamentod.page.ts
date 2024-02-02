// orcamentod.page.ts

import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-orcamentod',
  templateUrl: './orcamentod.page.html',
  styleUrls: ['./orcamentod.page.scss'],
})
export class OrcamentodPage {

  categoriaSelecionada: string | null = null;

  opcoesBolos = [
    { nome: 'Bolo de Chocolate', preco: 'R$20', selecionado: false },
    { nome: 'Bolo de Morango', preco: 'R$25', selecionado: false },
    { nome: 'Bolo Red Velvet', preco: 'R$30', selecionado: false },
    { nome: 'Bolo de Casamento', preco: 'R$50', selecionado: false },
    // Adicione mais opções conforme necessário
  ];

  opcoesBebidas = [
    { nome: 'Refrigerante', preco: 'R$5', selecionado: false },
    { nome: 'Suco Natural', preco: 'R$8', selecionado: false },
    { nome: 'Coquetel de Frutas', preco: 'R$12', selecionado: false },
    { nome: 'Champagne', preco: 'R$25', selecionado: false },
    // Adicione mais opções conforme necessário
  ];

  opcoesDecoracao = [
    { nome: 'Balões Coloridos', preco: 'R$15', selecionado: false },
    { nome: 'Flores Naturais', preco: 'R$20', selecionado: false },
    { nome: 'Decoração Vintage', preco: 'R$18', selecionado: false },
    { nome: 'Decoração de Festa Tropical', preco: 'R$25', selecionado: false },
    // Adicione mais opções conforme necessário
  ];

  opcoesComidas = [
    { nome: 'Pizza Margherita', preco: 'R$20', selecionado: false },
    { nome: 'Sushi Variado', preco: 'R$30', selecionado: false },
    { nome: 'Churrasco Gourmet', preco: 'R$25', selecionado: false },
    { nome: 'Prato Vegetariano', preco: 'R$18', selecionado: false },
    // Adicione mais opções conforme necessário
  ];

  mostrarOpcoes(categoria: string) {
    this.categoriaSelecionada = this.categoriaSelecionada !== categoria ? categoria : null;
  }

  selecionarTodos(opcoes: any[]) {
    for (const opcao of opcoes) {
      opcao.selecionado = true;
    }
  }

}