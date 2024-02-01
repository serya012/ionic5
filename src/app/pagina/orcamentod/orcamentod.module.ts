import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrcamentodPageRoutingModule } from './orcamentod-routing.module';

import { OrcamentodPage } from './orcamentod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrcamentodPageRoutingModule
  ],
  declarations: [OrcamentodPage]
})
export class OrcamentodPageModule {}
