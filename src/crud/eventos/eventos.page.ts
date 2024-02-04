import { Component, OnInit } from '@angular/core';
import { Evento, EventoService } from './../../crud/evento.service';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { AddeventoPage } from '../addevento/addevento.page';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  eventos: Evento[] = [];

  constructor(
    private eventoService: EventoService,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private toastCtrl: ToastController // Adicionado o ToastController
  ) { }

  ngOnInit() {
    this.carregarEventos();
  }

  async novoEvento() {
    const modal = await this.modalCtrl.create({
      component: AddeventoPage
    });

    modal.onDidDismiss().then(() => {
      this.carregarEventos();
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
            this.removerEvento(id);
          }
        }
      ]
    });

    await alert.present();
  }

  removerEvento(id: any) {
    this.eventoService.removerEvento(id).subscribe(() => {
      this.carregarEventos();
    });
  }

  private carregarEventos() {
    this.eventoService.getAllEventos().subscribe(response => {
      this.eventos = response;
    });
  }

  async atualizarEvento(evento: Evento) {
    const modal = await this.modalCtrl.create({
      component: AddeventoPage,
      componentProps: { evento: evento } // Corrigido o nome do parâmetro
    });
  
    modal.onDidDismiss().then(() => {
      this.carregarEventos();
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
