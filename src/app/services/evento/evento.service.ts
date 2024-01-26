import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  eventos: any[] = []; 

  constructor() { }

  criarEvento(nome: string) {
    const novoEvento = { nome: nome };
    this.eventos.push(novoEvento);
    return novoEvento;
  }

  obterEventos() {
    return this.eventos.slice(); 
  }

  obterEventoPorId(index: number) {
    return this.eventos[index];
  }

  atualizarEvento(index: number, novoNome: string) {
    if (this.eventos[index]) {
      this.eventos[index].nome = novoNome;
    }
  }

  excluirEvento(index: number) {
    if (index >= 0 && index < this.eventos.length) {
      this.eventos.splice(index, 1);
    }
  }
}
