import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracao',
  templateUrl: 'configuracao.page.html',
  styleUrls: ['configuracao.page.css'],
})
export class ConfiguracaoPage {
  constructor() {}

  excluirTudo() {
    // Lógica para excluir tudo
    console.log('Excluir tudo!');
  }
}
