import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoevePage } from './historicoeve.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoevePageRoutingModule {}
