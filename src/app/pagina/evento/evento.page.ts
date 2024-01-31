import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicModule, AlertController } from '@ionic/angular';


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
  eventos: Evento[] = [
    {
      id: 1,
      nome: 'Evento 1',
      data: '2024-02-01',
      horaInicio: '09:00',
      horaTermino: '12:00',
      local: 'Local A',
    },
    {
      id: 2,
      nome: 'Evento 2',
      data: '2024-02-02',
      horaInicio: '14:00',
      horaTermino: '17:00',
      local: 'Local B',
    },
    // Adicione mais eventos conforme necessário
  ];

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  async verDetalhes(evento: Evento) {
    this.navCtrl.navigateForward(`/evento-detalhes/${evento.id}`);
  }

  async editarEvento(evento: Evento) {
    // Lógica para editar o evento
    // Por exemplo, você pode abrir um modal para editar as propriedades do evento
    const alert = await this.alertController.create({
      header: 'Editar Evento',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          value: evento.nome,
          placeholder: 'Nome do Evento',
        },
        // Adicione outros campos conforme necessário
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Salvar',
          handler: (data: any) => {
            // Lógica para salvar as alterações
            evento.nome = data.nome;
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
            // Lógica para excluir o evento
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
} 