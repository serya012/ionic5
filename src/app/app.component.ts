import { Component } from '@angular/core';
import { BootstrapOptions } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Eventos', url: 'evento', icon: 'balloon' }, // Use Bootstrap icon class here
    { title: 'Orcamento', url: 'orcamento', icon: 'cash' },
    { title: 'Feedback', url: 'feedback', icon: 'star' },
    { title: 'Perfil', url: 'perfil', icon: 'person' },
    { title: 'Configuracao', url: 'configuracao', icon: 'settings' },
    
  ];
}
