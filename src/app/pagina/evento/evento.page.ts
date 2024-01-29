import { Component } from '@angular/core';
import { FestaService } from '../../services/festaservice/festa.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage {
  eventos: any[] = [];
  nomeEvento: string = '';

  constructor(private festaService: FestaService) {
    this.carregarEventos();
  }

  async criarEvento() {
    if (this.nomeEvento.trim() !== '') {
      await this.festaService.criarEvento(this.nomeEvento);
      this.carregarEventos();
      this.nomeEvento = ''; 
    }
  }

  async editarEvento(index: number) {
    const novoNome = prompt('Digite o novo nome do evento:');
    if (novoNome !== null) {
      await this.festaService.atualizarEvento(index, novoNome);
      this.carregarEventos();
    }
  }

  excluirEvento(index: number) {
    this.festaService.excluirEvento(index);
    this.carregarEventos();
  }
  
  carregarEventos() {
    this.eventos = this.festaService.obterEventos();
  }

  verDetalhesEvento(index: number) {
    const eventoSelecionado = this.eventos[index];
  
    // You can replace the following lines with your custom logic for viewing details
    alert(`Detalhes do evento ${eventoSelecionado.nome}: \nData: ${eventoSelecionado.data}, Local: ${eventoSelecionado.local}`);
    console.log('Ver detalhes do evento', eventoSelecionado);
  }
  
}
