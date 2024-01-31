import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: 'feedback.page.html',
  styleUrls: ['feedback.page.scss'],
})
export class FeedbackPage {
  avaliacao: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];
  comentarios: string = '';

  constructor(private alertController: AlertController) {}

  setRating(selectedStar: number) {
    this.avaliacao = selectedStar;
  }

  async enviarFeedback() {
    // Lógica para enviar feedback com avaliação e comentários
    console.log('Avaliação:', this.avaliacao);
    console.log('Comentários:', this.comentarios);

    // Exibir alerta de feedback enviado
    const alert = await this.alertController.create({
      header: 'Feedback Enviado',
      message: 'Obrigado por compartilhar sua opinião!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
