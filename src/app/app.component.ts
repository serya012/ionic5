import { Component } from '@angular/core';
import { home, person, settings } from 'ionicons/icons';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  home = home;
  person = person;
  settings = settings;
  public appPages = [
    { title: 'Novo Evento', url: '/folder/novo-evento', icon: 'calendar' },
    { title: 'Orçamento', url: '/folder/orcamento', icon: 'cash' },
    { title: 'Feedback', url: '/folder/feedback', icon: 'clipboard' },
    { title: 'Convidados', url: '/folder/convidados', icon: 'people' },
    { title: 'Perfil', url: '/folder/perfil', icon: 'person' },
    { title: 'Configuração', url: '/folder/configuracao', icon: 'settings' },
  ];
  constructor() {}
}
