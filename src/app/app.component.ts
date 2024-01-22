import { Component } from '@angular/core';
import { calendar, wallet, clipboard, people, person, settings } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  calendar = calendar;
  wallet = wallet;
  clipboard = clipboard;
  people = people;
  person = person;
  settings = settings;

  public appPages = [
    { title: 'Eventos', url: '/evento', icon: 'calendar' },
    { title: 'Orçamento', url: '/orcamento', icon: 'wallet' },
    { title: 'Feedback', url: '/feedback', icon: 'clipboard' },
    { title: 'Convidados', url: '/convidado', icon: 'people' },
    { title: 'Perfil', url: '/perfil', icon: 'person' },
    { title: 'Configuração', url: '/configuracao', icon: 'settings' },
  ];

  constructor() {}
}
