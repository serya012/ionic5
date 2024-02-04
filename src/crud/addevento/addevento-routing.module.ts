import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddeventoPage } from './addevento.page';

const routes: Routes = [
  {
    path: '',
    component: AddeventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddeventoPageRoutingModule {}
