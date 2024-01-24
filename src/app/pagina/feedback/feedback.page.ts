// feedback.page.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage {
  seuNome: string = '';
  feedback: string = '';
  avaliacao: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  setRating(event: any): void {
    const selectedValue = event.target.getAttribute('data-value');
    this.avaliacao = selectedValue ? +selectedValue : 0;
  }

  enviarFeedback(): void {
    // Lógica para enviar o feedback e avaliação
    console.log('Nome:', this.seuNome);
    console.log('Avaliação:', this.avaliacao);
    console.log('Feedback:', this.feedback);
  }
}
