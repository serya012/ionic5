import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },  {
    path: 'paginas',
    loadChildren: () => import('./paginas/paginas.module').then( m => m.PaginasPageModule)
  },
  {
    path: 'evento',
    loadChildren: () => import('./pagina/evento/evento.module').then( m => m.EventoPageModule)
  },
  {
    path: 'orcamento',
    loadChildren: () => import('./pagina/orcamento/orcamento.module').then( m => m.OrcamentoPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pagina/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'convidado',
    loadChildren: () => import('./pagina/convidado/convidado.module').then( m => m.ConvidadoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
