// Importa o decorator 'Component' do módulo '@angular/core'
import { Component } from '@angular/core';

// Importa o serviço 'FestaService' do arquivo '../festaservice/festa.service'
import { FestaService } from '../festaservice/festa.service';  // Verifique o caminho correto

// Define um componente Angular com o nome 'app-evento'
@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',   // Arquivo de template para o componente
  styleUrls: ['./evento.page.scss'],   // Arquivos de estilo para o componente
})
// Define a classe 'FestaService' (o que está errado aqui, deve ser 'EventoPage')
export class EventoPage {

  // Propriedades da classe
  eventos: any[] = [];  // Array para armazenar eventos
  nomeEvento: string = '';  // String para armazenar o nome do evento

  // Construtor da classe, recebe uma instância do serviço 'FestaService' injetada
  constructor(private festaService: FestaService) {
    // Chama o método 'carregarEventos()' ao criar uma instância da classe
    this.carregarEventos();
  }

  // Método assíncrono para criar um novo evento
  async criarEvento() {
    // Verifica se o nome do evento não está vazio ou contém apenas espaços em branco
    if (this.nomeEvento.trim() !== '') {
      // Chama o método 'criarFesta' do serviço 'FestaService' passando o nome do evento
      await this.FestaService.criarFesta(this.nomeEvento);
      // Recarrega os eventos após criar um novo evento
      this.carregarEventos();
      // Limpa o campo do nome do evento
      this.nomeEvento = '';
    }
  }

  // Método assíncrono para editar um evento com base no índice fornecido
  async editarEvento(index: number) {
    // Solicita ao usuário o novo nome do evento através de um prompt
    const novoNome = prompt('Digite o novo nome do evento:');
    // Verifica se o usuário não cancelou a operação
    if (novoNome !== null) {
      // Chama o método 'atualizarFesta' do serviço 'FestaService' com o índice e o novo nome
      await this.FestaService.atualizarFesta(index, novoNome);
      // Recarrega os eventos após editar um evento
      this.carregarEventos();
    }
  }

  // Método para excluir um evento com base no índice fornecido
  excluirEvento(index: number) {
    // Chama o método 'excluirFesta' do serviço 'FestaService' passando o índice
    this.FestaService.excluirFesta(index);
    // Recarrega os eventos após excluir um evento
    this.carregarEventos();
  }

  // Método para carregar os eventos chamando o método 'obterFesta' do serviço 'FestaService'
  carregarEventos() {
    this.eventos = this.FestaService.obterFesta();
  }

  // Método para visualizar detalhes de um evento com base no índice fornecido
  verDetalhesEvento(index: number) {
    // Obtém o evento selecionado com base no índice
    const eventoSelecionado = this.eventos[index];
    // Pode ser utilizado para exibir detalhes na interface do usuário
  }
}
