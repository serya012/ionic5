import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginusuarioPage } from './loginusuario.page';

const routes: Routes = [
  {
    path: '',
    component: LoginusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginusuarioPageRoutingModule {}
