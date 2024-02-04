import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddclientePage } from './addcliente.page';

const routes: Routes = [
  {
    path: '',
    component: AddclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddclientePageRoutingModule {}
