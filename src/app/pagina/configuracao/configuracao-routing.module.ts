import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfiguracaoPage } from './pagina/configuracao.page';  // Corrija o caminho do import

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
 