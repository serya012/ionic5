import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroadmPageRoutingModule } from './cadastroadm-routing.module';

import { CadastroadmPage } from './cadastroadm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroadmPageRoutingModule
  ],
  declarations: [CadastroadmPage]
})
export class CadastroadmPageModule {}
