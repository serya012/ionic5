import { Cliente } from './../../crud/cliente.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../../crud/cliente.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-addcliente',
  templateUrl: './addcliente.page.html',
  styleUrls: ['./addcliente.page.scss'],
})
export class AddclientePage implements OnInit {

  @Input() u!: Cliente;
  atualizarCliente = false;
  dados = {
    nome: '',
    email: '',
    cpf: '',
    senha: '',
    nivel2: '',
  };

  constructor(
    private modalCtrl: ModalController,
    private service: ClienteService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    if (this.u) {
      this.atualizarCliente = true;
      this.dados = { ...this.u }; // Copiar os dados do cliente para o formulário
    }
  }

  fecharModal() {
    // Emite um status de atualização bem-sucedida ao fechar o modal
    this.modalCtrl.dismiss({ atualizadoComSucesso: this.atualizarCliente });
  }

  async enviando(form: NgForm) {
    if (form.invalid) {
      // Se o formulário for inválido, retorne sem fazer nada
      return;
    }

    const cliente = form.value;

    try {
      // Verificar se o CPF tem exatamente 11 caracteres
      if (cliente.cpf.length !== 12) {
        this.mostrarMensagem('O CPF deve ter exatamente 11 caracteres.');
        return;
      }

      if (this.atualizarCliente) {
        await this.service.atualizarCliente(cliente, this.u.id).toPromise();
        this.mostrarMensagem('Cliente atualizado com sucesso.');
      } else {
        const emailExist = await firstValueFrom(this.service.getEmail(cliente.email));
        const cpfExist = await firstValueFrom(this.service.getCpf(cliente.cpf));

        if (emailExist) {
          this.mostrarMensagem('Este email já está em uso.');
          return;
        }

        if (cpfExist) {
          this.mostrarMensagem('Este CPF já está em uso.');
          return;
        }

        await this.service.createCliente(cliente).toPromise();
        this.mostrarMensagem('Cliente cadastrado com sucesso.');
        this.fecharModal(); // Fechar o modal após o cadastro bem-sucedido
      }
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
