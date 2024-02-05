// src/app/pagina/perfil/perfil.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
})
export class PerfilPage {
  fotoPerfil: string = ''; // Inicialize como uma string vazia
  userEmail: string = '';
  userPassword: string = '';

  constructor(private router: Router) {}

  // Função para trocar o e-mail
  changeEmail() {
    // Implemente a lógica para trocar o e-mail aqui
    //ESTÁ SEM LÓGICA
  }

  // Função para trocar a senha
  changePassword() {
    // Implemente a lógica para trocar a senha aqui
    //ESTÁ SEM LÓGICA

  }

  // Função para lidar com o "Esqueci a Senha"
  async forgotPassword() {
    // Implemente a lógica para enviar um e-mail de recuperação de senha ou outra abordagem desejada
    // Pode incluir uma caixa de diálogo para o usuário inserir um novo password
    // Exemplo:
    const newPassword = prompt('Insira a nova senha');
    if (newPassword) {
      // Implemente a lógica para trocar a senha usando o newPassword
      console.log('Senha alterada com sucesso:', newPassword);
    }//NÃO RECOMENDO ESSA LÓGICA
  }
}
