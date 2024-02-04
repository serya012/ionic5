import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddfeedbackPageRoutingModule } from './addfeedback-routing.module';

import { AddfeedbackPage } from './addfeedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddfeedbackPageRoutingModule
  ],
  declarations: [AddfeedbackPage]
})
export class AddfeedbackPageModule {}
