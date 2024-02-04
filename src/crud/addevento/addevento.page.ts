import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Evento, EventoService } from '../../crud/evento.service';

@Component({
  selector: 'app-addevento',
  templateUrl: './addevento.page.html',
  styleUrls: ['./addevento.page.scss'],
})
export class AddeventoPage implements OnInit {

  @Input() evento!: Evento;
  atualizarEvento = false;
  dados = {
    nome: '',
    data: '',
    horario_entrada: '',
    horario_saida: '',
    local: '',
  };

  constructor(
    private modalCtrl: ModalController,
    private eventoService: EventoService,
    private toastCtrl: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    if (this.evento) {
      this.atualizarEvento = true;
      this.dados = { ...this.evento }; // Copiar os dados do evento para o formulário
    }
  }

  fecharModal() {
    // Emite um status de atualização bem-sucedida ao fechar o modal
    this.modalCtrl.dismiss({ atualizadoComSucesso: true });
  }

  async enviando(form: NgForm) {
    if (form.invalid) {
      // Se o formulário for inválido, retorne sem fazer nada
      return;
    }

    const evento = form.value;

    try {
      // Lógica de validação adicional aqui, se necessário

      if (this.atualizarEvento) {
        await this.eventoService.atualizarEvento(evento, this.evento.id).toPromise();
        this.mostrarMensagem('Evento atualizado com sucesso.');
      } else {
        await this.eventoService.criarEvento(evento).toPromise();
        this.mostrarMensagem('Evento cadastrado com sucesso.');
      }

      this.modalCtrl.dismiss();
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  }

  async mostrarMensagem(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  async removerEvento(evento: Evento) {
    try {
      const alert = await this.alertController.create({
        header: 'Remover Evento',
        message: `Deseja realmente remover o evento: ${evento.nome}?`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
          },
          {
            text: 'Remover',
            handler: async () => {
              try {
                await this.eventoService.removerEvento(evento.id).toPromise();
                this.mostrarMensagem('Evento removido com sucesso.');
              } catch (error) {
                console.error('Erro ao remover o evento:', error);
              }
            },
          },
        ],
      });

      await alert.present();
    } catch (error) {
      console.error('Erro ao abrir o alerta:', error);
    }
  }
}
