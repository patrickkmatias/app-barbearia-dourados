import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pg/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pg/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pg/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'lista-barbeiros',
    loadChildren: () => import('./pg/lista-barbeiros/lista-barbeiros.module').then( m => m.ListaBarbeirosPageModule)
  },
  {
    path: 'perfil-barbeiro',
    loadChildren: () => import('./pg/perfil-barbeiro/perfil-barbeiro.module').then( m => m.PerfilBarbeiroPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pg/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./pg/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./pg/local/local.module').then( m => m.LocalPageModule)
  },
  {
    path: 'servicos',
    loadChildren: () => import('./pg/servicos/servicos.module').then( m => m.ServicosPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
