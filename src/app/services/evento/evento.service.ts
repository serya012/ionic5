// evento.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  eventos: any[] = [];

  constructor() { }

  criarEvento(nome: string, dia: string, hora: string, localizacao: string, inicio: string, termino: string) {
    const novoEvento = { 
      nome: nome,
      dia: dia,
      hora: hora,
      localizacao: localizacao,
      inicio: inicio,
      termino: termino
    };
    this.eventos.push(novoEvento);
    return novoEvento;
  }

  obterEventos() {
    return this.eventos.slice();
  }

  obterEventoPorId(index: number) {
    return this.eventos[index];
  }

  atualizarEvento(index: number, novoNome: string, novoDia: string, novaHora: string, novaLocalizacao: string, novoInicio: string, novoTermino: string) {
    if (this.eventos[index]) {
      this.eventos[index].nome = novoNome;
      this.eventos[index].dia = novoDia;
      this.eventos[index].hora = novaHora;
      this.eventos[index].localizacao = novaLocalizacao;
      this.eventos[index].inicio = novoInicio;
      this.eventos[index].termino = novoTermino;
    }
  }

  excluirEvento(index: number) {
    if (index >= 0 && index < this.eventos.length) {
      this.eventos.splice(index, 1);
    }
  }
}
