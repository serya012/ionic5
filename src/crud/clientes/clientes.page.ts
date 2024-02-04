import { Component, OnInit } from '@angular/core';
import { Cliente, ClienteService } from './../../crud/cliente.service';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { AddclientePage } from '../addcliente/addcliente.page';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private toastCtrl: ToastController // Adicionado o ToastController
  ) { }

  ngOnInit() {
    this.carregarClientes();
  }

  async novoCliente() {
    const modal = await this.modalCtrl.create({
      component: AddclientePage
    });

    modal.onDidDismiss().then(() => {
      this.carregarClientes();
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
            this.removercliente(id);
          }
        }
      ]
    });

    await alert.present();
  }

  removercliente(id: any) {
    this.clienteService.removercliente2(id).subscribe(() => {
      this.carregarClientes();
    });
  }

  private carregarClientes() {
    this.clienteService.getAll().subscribe(response => {
      this.clientes = response;
    });
  }

 async atualizarCliente(cliente: Cliente) {
  const modal = await this.modalCtrl.create({
    component: AddclientePage,
    componentProps: { u: cliente } // Alterado de 'c' para 'u' para corresponder ao nome esperado em addcliente.page.ts
  });

  modal.onDidDismiss().then(() => {
    this.carregarClientes();
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
