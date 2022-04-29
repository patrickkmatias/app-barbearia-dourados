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
        path: 'agende',
        loadChildren: () => import('../pg/agende/agende.module').then( m => m.AgendePageModule)
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
