import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Feedback, FeedbackService } from '../../crud/feedback.service';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.page.html',
  styleUrls: ['./addfeedback.page.scss'],
})
export class AddfeedbackPage implements OnInit {

  avaliacao: number = 0; // Adicionando a propriedade avaliacao
  dados = {
    avaliacao: 0,
    comentario: ''
  };

  stars: number[] = [1, 2, 3, 4, 5];

  constructor(
    private modalCtrl: ModalController,
    private service: FeedbackService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  fecharModal() {
    this.modalCtrl.dismiss();
  }

  setRating(selectedStar: number) {
    this.avaliacao = selectedStar; // Atualizando a avaliacao quando uma estrela é selecionada
    this.dados.avaliacao = selectedStar;
  }

  async enviando(form: NgForm) {
    if (form.invalid || this.avaliacao === 0) { // Usando a propriedade avaliacao
      // Se o formulário for inválido ou a avaliação não foi fornecida, exiba um toast
      this.mostrarMensagem('Por favor, forneça uma avaliação e comentários.');
      return;
    }

    const feedback: Feedback = {
      avaliacao: this.avaliacao,
      comentario: this.dados.comentario,
      id: ''
    };

    try {
      await this.service.adicionarFeedback(feedback).toPromise();
      this.mostrarMensagem('Feedback cadastrado com sucesso.');

      this.modalCtrl.dismiss();
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  }

  async mostrarMensagem(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
