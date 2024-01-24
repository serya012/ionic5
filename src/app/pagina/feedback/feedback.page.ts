// feedback.page.ts
import { Component } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';

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
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  setRating(event: any): void {
    const selectedValue = event.target.getAttribute('data-value');
    this.avaliacao = selectedValue ? +selectedValue : 0;
  }

  async confirmarEnvio(): Promise<void> {
    if (!this.seuNome.trim()) {
      this.exibirAlerta('Campo Obrigatório', 'Por favor, preencha o nome antes de enviar o formulário.');
      return;
    }
  
    const loading = await this.mostrarLoading('Enviando feedback...', 4000);
  
    try {
      await this.enviarFeedback();
    } finally {
      await loading.dismiss();
    }
  }
  

  async enviarFeedback(): Promise<void> {
    // Verifica se o nome está vazio
    if (!this.seuNome.trim()) {
      this.exibirAlerta('Campo Obrigatório', 'Por favor, preencha o nome antes de enviar o formulário.');
      return;
    }
  
    if (this.avaliacao <= 0) {
      await this.exibirAlerta('Avaliação Inválida', 'Por favor, escolha uma avaliação de 1 a 5 estrelas.');
      return;
    }
  
    const loading = await this.mostrarLoading('Enviando formulário...', 4000);
  
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      console.log('Nome:', this.seuNome);
      console.log('Avaliação:', this.avaliacao);
      console.log('Feedback:', this.feedback);
  
      this.limparFormulario();
  
      await this.exibirToast('Formulário enviado com sucesso!', 'success');
  
      this.formularioEnviado = true;
  
      setTimeout(() => {
        this.formularioEnviado = false;
      }, 3000);
    } finally {
      await loading.dismiss();
    }
  }
  

  async mostrarLoading(message: string, duration: number): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingController.create({
      message,
      duration,
    });

    await loading.present();
    return loading;
  }

  async exibirAlerta(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async exibirToast(message: string, color: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'top',
      color,
    });

    await toast.present();
  }

  limparFormulario(): void {
    this.seuNome = '';
    this.avaliacao = 0;
    this.feedback = '';
  }
}
