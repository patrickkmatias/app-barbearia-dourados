import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaBarbeirosPage } from './lista-barbeiros.page';

const routes: Routes = [
  {
    path: '',
    component: ListaBarbeirosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaBarbeirosPageRoutingModule {}
