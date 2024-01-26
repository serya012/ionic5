import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EventoService } from '../../services/evento.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage {
  nomeEvento: string = '';
  eventos: any[] = [];

  constructor(private navCtrl: NavController, private eventoService: EventoService) {
    this.carregarEventos();
  }

  criarEvento() {
    if (!this.nomeEvento) {
      console.error('Preencha o nome do evento.');
      return;
    }

    this.eventoService.criarEvento(this.nomeEvento);
    this.carregarEventos();
    this.nomeEvento = ''; // Limpa o campo após criar o evento
  }

  carregarEventos() {
    this.eventos = this.eventoService.obterEventos();
  }

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
}
