import { Component } from '@angular/core';
import { FestaService } from './festa.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class FestaService {}
export class EventoPage {
  eventos: any[] = [];
  nomeEvento: string = '';

  constructor(private FestaService: FestaService) {
    this.carregarEventos();
  }

  async criarEvento() {
    if (this.nomeEvento.trim() !== '') {
      await this.FestaService.criarFesta(this.nomeEvento);
      this.carregarEventos();
      this.nomeEvento = ''; 
    }
  }

  async editarEvento(index: number) {
    const novoNome = prompt('Digite o novo nome do evento:');
    if (novoNome !== null) {
      await this.FestaService.atualizarFesta                                                        (index, novoNome);
      this.carregarEventos();
    }
  }

  excluirEvento(index: number) {
    this.FestaService.excluirFesta(index);
    this.carregarEventos();
  }

  carregarEventos() {
    this.eventos = this.FestaService.obterFesta();
  }

  verDetalhesEvento(index: number) {
    const eventoSelecionado = this.eventos[index];
  }


}
