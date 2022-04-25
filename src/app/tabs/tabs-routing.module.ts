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
        path: '',
        redirectTo: '/tabs/pg/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pg/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
