import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: 'feedback.page.html',
  styleUrls: ['feedback.page.scss'],
})
export class FeedbackPage {
  avaliacao: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];
  comentarios: string = '';

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  setRating(selectedStar: number) {
    this.avaliacao = selectedStar;
  }

  async enviarFeedback() {
    if (this.avaliacao === 0 || this.comentarios.trim() === '') {
      // Se a avaliação ou os comentários não foram fornecidos, exibir um alerta
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Por favor, forneça uma avaliação e comentários.',
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      // Exibindo mensagem de loading
      const loading = await this.loadingController.create({
        message: 'Enviando suas informações...',
        duration: 2000, // Simula o envio por 2 segundos
        spinner: 'crescent',
      });

      await loading.present();

      try {
        // Simulando envio assíncrono (substitua isso com a lógica de envio real)
        await this.simularEnvioAsync();

        // Feedback de envio bem-sucedido
        const alert = await this.alertController.create({
          header: 'Feedback Enviado',
          message: 'Obrigado por compartilhar sua opinião!',
          buttons: ['OK'],
        });

        await alert.present();
      } catch (error) {
        console.error('Erro ao enviar feedback:', error);
      } finally {
        // Escondendo o loading
        await loading.dismiss();
      }
    }
  }

  // Função para simular envio assíncrono
  private simularEnvioAsync(): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        // Substitua este bloco com a lógica de envio real
        console.log('Avaliação enviada:', this.avaliacao, this.comentarios);
        console.log(this.comentarios);
        resolve();
      }, 2000); // Simula o envio por 2 segundos
    });
  }
}
