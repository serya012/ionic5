import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroadmPage } from './cadastroadm.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroadmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroadmPageRoutingModule {}
