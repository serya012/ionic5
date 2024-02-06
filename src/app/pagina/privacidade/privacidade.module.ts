import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacidadePageRoutingModule } from './privacidade-routing.module';

import { PrivacidadePage } from './privacidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacidadePageRoutingModule
  ],
  declarations: [PrivacidadePage]
})
export class PrivacidadePageModule {}
