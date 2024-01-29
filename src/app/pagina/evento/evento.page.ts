import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
<<<<<<< HEAD
import { FestaService } from '../../services/festaservice/festa.service';
=======
import { EventoService } from '../../services/evento.service';
>>>>>>> parent of f2de375 (fiz o crud de evento)

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
<<<<<<< HEAD
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
=======
export class EventoPage {
  nomeEvento: string = '';
  eventos: any[] = [];

  constructor(private navCtrl: NavController, private eventoService: EventoService) {
    this.carregarEventos();
>>>>>>> parent of f2de375 (fiz o crud de evento)
  }

  criarEvento() {
    if (!this.nomeEvento) {
      console.error('Preencha o nome do evento.');
      return;
    }

<<<<<<< HEAD
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
=======
    this.eventoService.criarEvento(this.nomeEvento);
    this.carregarEventos();
    this.nomeEvento = ''; // Limpa o campo após criar o evento
>>>>>>> parent of f2de375 (fiz o crud de evento)
  }

  carregarEventos() {
    this.eventos = this.eventoService.obterEventos();
  }

<<<<<<< HEAD
  excluirEvento(index: number) {
    this.festaService.excluirEvento(index);
    this.carregarEventos();
  }
=======
  editarEvento(id: number) {
    const novoNome = prompt('Digite o novo nome do evento:');
    if (novoNome !== null) {
      this.eventoService.atualizarEvento(id, novoNome);
      this.carregarEventos();
    }
  }

  excluirEvento(id: number) {
    this.eventoService.excluirEvento(id);
    this.carregarEventos();
  }
>>>>>>> parent of f2de375 (fiz o crud de evento)
}
