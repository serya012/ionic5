import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
})
export class PerfilPage {
  perfil: any;
  editing: boolean = false;

  constructor() {
    // Simulando um perfil de usuário com algumas informações
    this.perfil = {
      nome: 'João da Silva',
      email: 'joao@example.com',
      telefone: '123456789',
      dataNascimento: '01/01/1990',
      endereco: 'Rua ABC, 123',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consectetur elit.'
      // Outras informações do perfil podem ser adicionadas aqui
    };
  }

  toggleEditing() {
    this.editing = !this.editing;
  }
}
