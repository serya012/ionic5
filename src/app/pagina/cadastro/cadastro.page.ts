import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.page.html',
  styleUrls: ['cadastro.page.scss'],
})
export class CadastroPage {
  fotoPerfil: string = ''; // Inicialize como uma string vazia

  constructor(private router: Router) {}

  selecionarFoto() {
    // Lógica para selecionar uma foto, pode ser usando uma biblioteca ou nativo do Ionic/Cordova
    // Atualize a propriedade 'fotoPerfil' com o caminho da foto selecionada
  }
  entrar() {
    // Lógica de entrar na conta
    // Por exemplo, redirecionar para a página de login
    this.router.navigate(['/evento']); // Redirecionar para a página de login
  }
}
