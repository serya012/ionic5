import { Component, OnInit } from '@angular/core';
import { Usuario, UsuarioService } from './../../crud/usuario.service';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { AddusuarioPage } from '../addusuario/addusuario.page';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private toastCtrl: ToastController // Adicionado o ToastController
  ) { }

  ngOnInit() {
    this.carregarUsuarios();
  }

  async novoUsuario() {
    const modal = await this.modalCtrl.create({
      component: AddusuarioPage
    });

    modal.onDidDismiss().then(() => {
      this.carregarUsuarios();
    });

    await modal.present();
  }

  async confirmarExclusao(id: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar Exclusão',
      message: 'Deseja realmente excluir este usuário?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Exclusão cancelada');
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.removerusuario(id);
          }
        }
      ]
    });

    await alert.present();
  }

  removerusuario(id: any) {
    this.usuarioService.removerusuario(id).subscribe(() => {
      this.carregarUsuarios();
    });
  }

  private carregarUsuarios() {
    this.usuarioService.getAll().subscribe(response => {
      this.usuarios = response;
    });
  }

  async atualizarUsuario(usuario: Usuario) {
    const modal = await this.modalCtrl.create({
      component: AddusuarioPage,
      componentProps: { u: usuario }
    });
  
    modal.onDidDismiss().then(() => {
      this.carregarUsuarios();
    });
  
    await modal.present();
  }

  async mostrarMensagem(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}




