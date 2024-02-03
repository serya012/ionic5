// orcamentod.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Adicione esta linha
import { IonicModule } from '@ionic/angular';

import { OrcamentodPageRoutingModule } from './orcamentod-routing.module';
import { OrcamentodPage } from './orcamentod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  // Adicione esta linha
    IonicModule,
    OrcamentodPageRoutingModule
  ],
  declarations: [OrcamentodPage]
})
export class OrcamentodPageModule {}
