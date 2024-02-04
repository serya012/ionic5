import { Component, OnInit } from '@angular/core';
import { Feedback, FeedbackService } from './../../crud/feedback.service';
import { ModalController, ToastController } from '@ionic/angular';
import { AddfeedbackPage } from '../addfeedback/addfeedback.page';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  feedbacks: Feedback[] = [];

  constructor(
    private feedbackService: FeedbackService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController // Adicionado o ToastController
  ) { }

  ngOnInit() {
    this.carregarFeedbacks();
  }

  async novoFeedback() {
    const modal = await this.modalCtrl.create({
      component: AddfeedbackPage
    });

    modal.onDidDismiss().then(() => {
      this.carregarFeedbacks();
    });

    await modal.present();
  }

  private carregarFeedbacks() {
    this.feedbackService.getAllFeedbacks().subscribe(response => {
      this.feedbacks = response;
    });
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
