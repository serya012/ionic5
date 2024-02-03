import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoevePageRoutingModule } from './historicoeve-routing.module';

import { HistoricoevePage } from './historicoeve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoevePageRoutingModule
  ],
  declarations: [HistoricoevePage]
})
export class HistoricoevePageModule {}
