import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvidadoPage } from './convidado.page';

const routes: Routes = [
  {
    path: '',
    component: ConvidadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvidadoPageRoutingModule {}
