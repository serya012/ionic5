import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FestaService } from '../../services/festaservice/festa.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventPage {
  eventos: any[] = [];
  nomeEvento: string = '';
  novoDia: string = '';
  novaHora: string = '';
  novaLocalizacao: string = '';
  novoInicio: string = '';
  novoTermino: string = '';

  constructor(private navCtrl: NavController, private festaService: FestaService) {
    this.eventos = this.festaService.obterEventos();
    // Limpe as novas propriedades no construtor
    this.novoDia = '';
    this.novaHora = '';
    this.novaLocalizacao = '';
    this.novoInicio = '';
    this.novoTermino = '';
  }

  criarEvento() {
    if (!this.nomeEvento) {
      console.error('Preencha o nome do evento.');
      return;
    }

    // Altere esta linha para incluir as novas propriedades
    this.festaService.criarEvento(
      this.nomeEvento,
      this.novoDia,
      this.novaHora,
      this.novaLocalizacao,
      this.novoInicio,
      this.novoTermino
    );

    this.carregarEventos();
    this.nomeEvento = '';
    // Limpe as novas propriedades após criar o evento
    this.novoDia = '';
    this.novaHora = '';
    this.novaLocalizacao = '';
    this.novoInicio = '';
    this.novoTermino = '';
  }

  carregarEventos() {
    this.eventos = this.festaService.obterEventos();
  }

  editarEvento(index: number) {
    // Lógica para edição de um evento
  }

  excluirEvento(index: number) {
    this.festaService.excluirEvento(index);
    this.carregarEventos();
  }
}
