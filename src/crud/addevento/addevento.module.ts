import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddeventoPageRoutingModule } from './addevento-routing.module';

import { AddeventoPage } from './addevento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddeventoPageRoutingModule
  ],
  declarations: [AddeventoPage]
})
export class AddeventoPageModule {}
