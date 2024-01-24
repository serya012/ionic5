// configuracao-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfiguracaoPage } from './configuracao.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracaoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracaoPageRoutingModule {}
