import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrcamentodPage } from './orcamentod.page';

const routes: Routes = [
  {
    path: '',
    component: OrcamentodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrcamentodPageRoutingModule {}
