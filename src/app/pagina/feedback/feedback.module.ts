// Importe o módulo StarRatingModule no seu módulo Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FeedbackPageRoutingModule } from './feedback-routing.module';
import { FeedbackPage } from './feedback.page';

// Importe o módulo StarRatingModule do pacote angular-star-rating
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackPageRoutingModule,
    StarRatingModule.forRoot(), // Adicione esta linha para importar o módulo de estrelas
  ],
  declarations: [FeedbackPage]
})
export class FeedbackPageModule {}
