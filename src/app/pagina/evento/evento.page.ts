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
    this.carregarEventos();
  }

  criarEvento() {
    if (this.nomeEvento.trim() !== '') {
      this.eventoService.criarEvento(this.nomeEvento);
      this.carregarEventos();
      this.nomeEvento = ''; 
    }
  }

  carregarEventos() {
    this.eventos = this.eventoService.obterEventos();
  }

  editarEvento(index: number) {
    const novoNome = prompt('Digite o novo nome do evento:');
    if (novoNome !== null) {
      this.eventoService.atualizarEvento(index, novoNome);
      this.carregarEventos();
    }
  }

  excluirEvento(index: number) {
    this.eventoService.excluirEvento(index);
    this.carregarEventos();
  }
  
  verDetalhesEvento(index: number) {
    // Your implementation for viewing details goes here
    console.log('Ver detalhes do evento', index);
  }
}
