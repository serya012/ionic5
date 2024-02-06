// src/app/pagina/perfil/perfil.page.ts

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
  providers: [], // Adicione o provedor para a classe Camera aqui
})
export class PerfilPage {
  fotoPerfil: string = '';
  userEmail: string = '';
  userPassword: string = '';

  constructor(
    private modalController: ModalController,

  ) { }

  changeEmail() {
    // Implemente a lógica para trocar o e-mail aqui
  }

  changePassword() {
    // Implemente a lógica para trocar a senha aqui
  }



  // Adicione a função changeProfilePicture

}
