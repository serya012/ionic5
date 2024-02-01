// evento.page.ts

import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

interface Evento {
  id: number;
  nome: string;
  data: string;
  horaInicio: string;
  horaTermino: string;
  local: string;
}

@Component({
  selector: 'app-evento',
  templateUrl: 'evento.page.html',
  styleUrls: ['evento.page.scss'],
})
export class EventoPage {
  eventos: Evento[] = [];

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
  ) {}

  adicionarEvento() {
    this.mostrarAlertaAdicionarEvento();
  }

  async mostrarAlertaAdicionarEvento() {
    const alerta = await this.alertController.create({
      header: 'Novo Evento',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Nome do Evento',
        },
        {
          name: 'data',
          type: 'date',
          placeholder: 'Data',
        },
        {
          name: 'horaInicio',
          type: 'time',
          placeholder: 'Hora de Início',
        },
        {
          name: 'horaTermino',
          type: 'time',
          placeholder: 'Hora de Término',
        },
        {
          name: 'local',
          type: 'text',
          placeholder: 'Local',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Adicionar',
          handler: (dados: any) => {
            // Verifique se todos os campos estão preenchidos
            if (!dados.nome || !dados.data || !dados.horaInicio || !dados.horaTermino || !dados.local) {
              this.mostrarAlertaCampoVazio();
              return;
            }

            this.adicionarEventoS({
              id: this.gerarIdUnico(),
              nome: dados.nome,
              data: dados.data,
              horaInicio: dados.horaInicio,
              horaTermino: dados.horaTermino,
              local: dados.local,
            });
          },
        },
      ],
    });

    await alerta.present();
  }

  adicionarEventoS(evento: Evento) {
    this.eventos.push(evento);
  }

  gerarIdUnico(): number {
    return new Date().getTime();
  }

  async verDetalhes(evento: Evento) {
    this.navCtrl.navigateForward(`/evento-detalhes/${evento.id}`);
  }

  async editarEvento(evento: Evento) {
    const alert = await this.alertController.create({
      header: 'Editar Evento',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          value: evento.nome,
          placeholder: 'Nome do Evento',
        },
        {
          name: 'data',
          type: 'date',
          value: evento.data,
          placeholder: 'Data',
        },
        {
          name: 'horaInicio',
          type: 'time',
          value: evento.horaInicio,
          placeholder: 'Hora de Início',
        },
        {
          name: 'horaTermino',
          type: 'time',
          value: evento.horaTermino,
          placeholder: 'Hora de Término',
        },
        {
          name: 'local',
          type: 'text',
          value: evento.local,
          placeholder: 'Local',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Salvar',
          handler: (data: any) => {
            // Verifique se todos os campos estão preenchidos
            if (!data.nome || !data.data || !data.horaInicio || !data.horaTermino || !data.local) {
              this.mostrarAlertaCampoVazio();
              return;
            }

            // Atualize todos os campos do evento
            evento.nome = data.nome;
            evento.data = data.data;
            evento.horaInicio = data.horaInicio;
            evento.horaTermino = data.horaTermino;
            evento.local = data.local;
            // Atualize outros campos conforme necessário
          },
        },
      ],
    });

    await alert.present();
  }

  async excluirEvento(evento: Evento) {
    const alert = await this.alertController.create({
      header: 'Excluir Evento',
      message: `Deseja realmente excluir o evento: ${evento.nome}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Excluir',
          handler: () => {
            const index = this.eventos.findIndex((e) => e.id === evento.id);
            if (index !== -1) {
              this.eventos.splice(index, 1);
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async mostrarAlertaCampoVazio() {
    const alertaCampoVazio = await this.alertController.create({
      header: 'Erro',
      message: 'Por favor, preencha todos os campos.',
      buttons: ['OK'],
    });

    await alertaCampoVazio.present();
  }
}
