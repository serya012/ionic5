import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Feedback {
  id: string;
  avaliacao: number;
  comentario: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  // Definindo o caminho de acesso à API de feedback
  private url = 'http://localhost/api/feedback';

  constructor(private http: HttpClient) { }

  // Método para obter todos os feedbacks
  getAllFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.url);
  }

  // Método para adicionar um novo feedback
  adicionarFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.url, feedback);
  }
}
