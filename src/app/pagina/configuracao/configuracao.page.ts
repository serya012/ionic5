// src/app/paginas/configuracao/configuracao.page.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage {
  eventName: string = '';
  celebrationDate: string = '';

  clearData() {
    this.eventName = '';
    this.celebrationDate = '';
  }
}
