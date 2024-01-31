import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    // Lógica de logout
    // Por exemplo, limpar dados do usuário e redirecionar para a página de login

    // Limpar dados do usuário (por exemplo, removendo token de autenticação)
    localStorage.removeItem('token'); // Supondo que você armazene o token de autenticação localmente

    // Redirecionar para a página de login
    this.router.navigate(['/evento']);
  }
}
