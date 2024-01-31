import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoPageRoutingModule } from './evento-routing.module';

import { EventoPage } from './evento.page';
import { IonicHeaderModule } from 'ionic-header';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoPageRoutingModule,
    IonicHeaderModule 
  ],
  declarations: [EventoPage]
})
// /src/app/pagina/evento/evento.model.ts
// /src/app/pagina/evento/evento.model.ts
export interface Evento {
  id: number;
  nome: string;
  data: string;
  horaInicio: string;
  horaTermino: string;
  local: string;
}
