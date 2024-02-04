import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Evento {
  id: string;
  nome: string;
  data: string;
  horario_entrada: string;
  horario_saida: string;
  local: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private url = 'http://localhost/api/evento';

  constructor(private http: HttpClient) { }

  getAllEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.url).pipe(
      catchError(error => {
        console.error('Erro ao obter eventos:', error);
        return throwError(error);
      })
    );
  }

  removerEvento(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  criarEvento(evento: Evento): Observable<any> {
    return this.http.post(this.url, evento).pipe(
      catchError(error => {
        console.error('Erro ao criar evento:', error);
        return throwError(error);
      })
    );
  }

  atualizarEvento(evento: Evento, id: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, evento).pipe(
      catchError(error => {
        console.error('Erro ao atualizar evento:', error);
        return throwError(error);
      })
    );
  }
}
