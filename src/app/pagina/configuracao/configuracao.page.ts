import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router se precisar redirecionar o usuário

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  entrar() {
    // Lógica de entrar na conta
    // Por exemplo, redirecionar para a página de login
    this.router.navigate(['/perfil']); // Redirecionar para a página de login
  }

  sair() {
    // Lógica de sair da conta
    // Por exemplo, limpar dados do usuário e redirecionar para a página inicial
    this.router.navigate(['/']); // Redirecionar para a página inicial
  }
}