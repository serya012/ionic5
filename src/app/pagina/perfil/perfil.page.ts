import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
})
export class PerfilPage {
  fotoPerfil: string = ''; // Inicialize como uma string vazia

  constructor(private router: Router) {}

  selecionarFoto() {
    // Lógica para selecionar uma foto, pode ser usando uma biblioteca ou nativo do Ionic/Cordova
    // Atualize a propriedade 'fotoPerfil' com o caminho da foto selecionada
  }
}
