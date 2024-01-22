import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvidadoPageRoutingModule } from './convidado-routing.module';

import { ConvidadoPage } from './convidado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvidadoPageRoutingModule
  ],
  declarations: [ConvidadoPage]
})
export class ConvidadoPageModule {}
