import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventoPage } from './evento.page';

const routes: Routes = [
  {
    path: '',
    component: EventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventoPageRoutingModule {}
