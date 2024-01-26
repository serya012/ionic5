import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  eventos: any[] = [];

  constructor() { }

  criarEvento(nome: string) {
    const novoEvento = { nome: nome, data: new Date() };
    this.eventos.push(novoEvento);
    return novoEvento;
  }

  obterEventos() {
    return this.eventos;
  }

  obterEventoPorId(id: number) {
    return this.eventos[id];
  }

  atualizarEvento(id: number, novoNome: string) {
    const evento = this.obterEventoPorId(id);
    if (evento) {
      evento.nome = novoNome;
    }
  }

  excluirEvento(id: number) {
    this.eventos.splice(id, 1);
  }
}
