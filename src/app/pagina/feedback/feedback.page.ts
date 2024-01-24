// feedback.page.ts
import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

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
  formularioEnviado: boolean = false;

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  setRating(event: any): void {
    const selectedValue = event.target.getAttribute('data-value');
    this.avaliacao = selectedValue ? +selectedValue : 0;
  }

  async confirmarEnvio(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza de que deseja enviar o formulário?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Enviar',
          handler: () => this.enviarFeedback(),
        },
      ],
    });

    await alert.present();
  }

  async enviarFeedback(): Promise<void> {
    // Verifica se a avaliação é maior que 0
    if (this.avaliacao <= 0) {
      const alert = await this.alertController.create({
        header: 'Avaliação Inválida',
        message: 'Por favor, escolha uma avaliação de 1 a 5 estrelas.',
        buttons: ['OK'],
      });

      await alert.present();
      return; // Não prossegue com o envio do formulário
    }

    // Lógica para enviar o feedback e avaliação
    console.log('Nome:', this.seuNome);
    console.log('Avaliação:', this.avaliacao);
    console.log('Feedback:', this.feedback);

    // Limpar o formulário após o envio
    this.seuNome = '';
    this.avaliacao = 0;
    this.feedback = '';

    // Exibir mensagem de sucesso como notificação (Toast)
    const toast = await this.toastController.create({
      message: 'Formulário enviado com sucesso!',
      duration: 3000, // 3000 milissegundos = 3 segundos
      position: 'top',
      color: 'success', // Cor da notificação
    });

    toast.present();

    // Atualizar a propriedade para mostrar a mensagem no template
    this.formularioEnviado = true;

    // Aguarde alguns segundos e, em seguida, limpe a mensagem
    setTimeout(() => {
      this.formularioEnviado = false;
    }, 3000);
  }
}
