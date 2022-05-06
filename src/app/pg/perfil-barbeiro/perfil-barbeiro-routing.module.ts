import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilBarbeiroPage } from './perfil-barbeiro.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilBarbeiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilBarbeiroPageRoutingModule {}
