import { Usuario } from './../../crud/usuario.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../crud/usuario.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.page.html',
  styleUrls: ['./addusuario.page.scss'],
})
export class AddusuarioPage implements OnInit {

  @Input() u!: Usuario;
  atualizarUsuario = false;
  dados = {
    nome: '',
    email: '',
    cpf: '',
    senha: '',
    nivel1: '',
  };

  constructor(
    private modalCtrl: ModalController,
    private service: UsuarioService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    if (this.u) {
      this.atualizarUsuario = true;
      this.dados = { ...this.u }; // Copiar os dados do usuário para o formulário
    }
  }

  fecharModal() {
    // Emite um status de atualização bem-sucedida ao fechar o modal
    this.modalCtrl.dismiss({ atualizadoComSucesso: true });
  }

  async enviando(form: NgForm) {
    if (form.invalid) {
      // Se o formulário for inválido, retorne sem fazer nada
      return;
    }

    const usuario = form.value;

    try {
      // Verificar se o CPF tem exatamente 11 caracteres
      if (usuario.cpf.length !== 11) {
        this.mostrarMensagem('O CPF deve ter exatamente 12 caracteres.');
        return;
      }

      if (this.atualizarUsuario) {
        await this.service.atualizarUsuario(usuario, this.u.id).toPromise();
        this.mostrarMensagem('Usuário atualizado com sucesso.');
      } else {
        const emailExist = await firstValueFrom(this.service.getEmail(usuario.email));
        const cpfExist = await firstValueFrom(this.service.getCpf(usuario.cpf));

        if (emailExist) {
          this.mostrarMensagem('Este email já está em uso.');
          return;
        }

        if (cpfExist) {
          this.mostrarMensagem('Este CPF já está em uso.');
          return;
        }

        await this.service.createUsuario(usuario).toPromise();
        this.mostrarMensagem('Usuário cadastrado com sucesso.');
      }

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
