import { Component } from '@angular/core';
import { BootstrapOptions } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Eventos', url: 'evento', icon: 'balloon' }, // Use Bootstrap icon class here
    { title: 'Orcamento', url: 'orcamento', icon: 'send' },
    { title: 'Feedback', url: 'feedback', icon: 'heart' },
    { title: 'Perfil', url: 'perfil', icon: 'archive' },
    { title: 'Configuracao', url: 'configuracao', icon: 'settings' },
  ];
}
