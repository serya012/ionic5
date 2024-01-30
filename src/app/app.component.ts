import { Component } from '@angular/core';
import { BootstrapOptions } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: 'evento', icon: 'envelope' }, // Use Bootstrap icon class here
    { title: 'Outbox', url: 'orcamento', icon: 'send' },
    { title: 'Favorites', url: 'feedback', icon: 'heart' },
    { title: 'Archived', url: 'perfil', icon: 'archive' },
    { title: 'Trash', url: 'configuracao', icon: 'gear' },
  ];
}
