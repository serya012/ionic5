import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Cliente {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  senha: string;
  nivel2: string;
  tipo: 'cliente';
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url = 'http://localhost/api/cliente';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  removercliente2(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  createCliente(cliente: Cliente): Observable<any> {
    return this.http.post(this.url, cliente);
  }

  atualizarCliente(cliente: Cliente, id: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, cliente);
  }
  
  getEmail(email: any): Observable<any> {
    return this.http.get(`${this.url}/${email}`);
  }

  getCpf(cpf: any): Observable<any> {
    return this.http.get(`${this.url}/${cpf}`);
  }

  getLoginCliente(email: string, senha: string): Observable<any> {
    return this.http.post<any>(`http://localhost/api/cliente/login`, { email, senha }).pipe(
      catchError(error => {
        console.error('Erro ao fazer login do usuário:', error);
        return throwError(error);
      })
    );
  }
}