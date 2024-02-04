// /src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pagina/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  },
  {
    path: 'evento',
    loadChildren: () => import('./pagina/evento/evento.module').then(m => m.EventoPageModule)
  },
  {
    path: 'orcamento',
    loadChildren: () => import('./pagina/orcamento/orcamento.module').then(m => m.OrcamentoPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pagina/feedback/feedback.module').then(m => m.FeedbackPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pagina/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./pagina/configuracao/configuracao.module').then(m => m.ConfiguracaoPageModule)
  },
  {
    path: 'orcamentod',
    loadChildren: () => import('./pagina/orcamentod/orcamentod.module').then(m => m.OrcamentodPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pagina/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pagina/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pagina/cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },

  {
    path: 'historicoeve',
    loadChildren: () => import('./pagina/historicoeve/historicoeve.module').then(m => m.HistoricoevePageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('../crud/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'addusuario',
    loadChildren: () => import('../crud/addusuario/addusuario.module').then( m => m.AddusuarioPageModule)
  },
  {
    path: 'addcliente',
    loadChildren: () => import('../crud/addcliente/addcliente.module').then( m => m.AddclientePageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('../crud/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('../crud/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('../crud/eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'addfeedback',
    loadChildren: () => import('../crud/addfeedback/addfeedback.module').then( m => m.AddfeedbackPageModule)
  },
  {
    path: 'addevento',
    loadChildren: () => import('../crud/addevento/addevento.module').then( m => m.AddeventoPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
