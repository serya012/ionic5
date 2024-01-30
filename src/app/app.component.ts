import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: 'evento', icon: 'mail' },
    { title: 'Outbox', url: 'configuracao', icon: 'paper-plane' },
    { title: 'Favorites', url: 'feedback', icon: 'heart' },
    { title: 'Archived', url: 'perfil', icon: 'archive' },
    { title: 'Trash', url: 'configuracao', icon: 'trash' },
    
  ];
 
}
