import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs/pg',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pg/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../pg/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'cadastro',
        loadChildren: () => import('../pg/cadastro/cadastro.module').then( m => m.CadastroPageModule)
      },
      {
        path: 'lista-barbeiros',
        loadChildren: () => import('../pg/lista-barbeiros/lista-barbeiros.module').then( m => m.ListaBarbeirosPageModule)
      },
      {
        path: 'perfil-barbeiro/:id',
        loadChildren: () => import('../pg/perfil-barbeiro/perfil-barbeiro.module').then( m => m.PerfilBarbeiroPageModule)
      },
      {
        path: 'local',
        loadChildren: () => import('../pg/local/local.module').then( m => m.LocalPageModule)
      },
      {
        path: 'calendario',
        loadChildren: () => import('../pg/calendario/calendario.module').then( m => m.CalendarioPageModule)
      },
      {
        path: 'perfil-usuario',
        loadChildren: () => import('../pg/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
      },
      {
        path: 'servicos',
        loadChildren: () => import('../pg/servicos/servicos.module').then( m => m.ServicosPageModule)
      },
    
      {
        path: '',
        redirectTo: '/tabs/pg/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pg/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
