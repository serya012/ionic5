import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  eventos: any[] = [];

  constructor() { }

  criarEvento(nome: string) {
    const novoEvento = { id: this.eventos.length + 1, nome: nome, data: new Date() };
    this.eventos.push(novoEvento);
    return novoEvento;
  }

  obterEventos() {
    return this.eventos;
  }

  obterEventoPorId(id: number) {
    return this.eventos.find(evento => evento.id === id);
  }

  atualizarEvento(id: number, novoNome: string) {
    const evento = this.obterEventoPorId(id);
    if (evento) {
      evento.nome = novoNome;
    }
  }

  excluirEvento(id: number) {
    const indice = this.eventos.findIndex(evento => evento.id === id);
    if (indice !== -1) {
      this.eventos.splice(indice, 1);
    }
  }
}
