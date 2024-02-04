import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddfeedbackPage } from './addfeedback.page';

const routes: Routes = [
  {
    path: '',
    component: AddfeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddfeedbackPageRoutingModule {}
