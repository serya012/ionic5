import { Component } from '@angular/core';
import { EventoService } from '../../services/evento/evento.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage {
  eventos: any[] = [];
  nomeEvento: string = '';

  constructor(private eventoService: EventoService) {
    this.eventos = this.eventoService.obterEvento();
  }

  criarEvento() {
    this.eventoService.criarEvento(this.nomeEvento);
    this.eventos = this.eventoService.obterEvento();
    this.nomeEvento = ''; // Limpa o campo após a criação do evento
  }

  editarEvento(index: number) {
    // Lógica para edição de um evento
  }

  excluirEvento(index: number) {
    this.eventoService.excluirEvento(index);
    this.eventos = this.eventoService.obterEvento();
  }
}