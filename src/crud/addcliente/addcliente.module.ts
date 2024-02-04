import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddclientePageRoutingModule } from './addcliente-routing.module';

import { AddclientePage } from './addcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddclientePageRoutingModule
  ],
  declarations: [AddclientePage]
})
export class AddclientePageModule {}
