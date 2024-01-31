// /src/app/pagina/evento/evento.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

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

  constructor(private navCtrl: NavController) {}

  verDetalhes(evento: Evento) {
    // Implemente a navegação para a página de detalhes do evento se necessário
    // this.navCtrl.navigateForward(`/evento-detalhes/${evento.id}`);
  }
}
