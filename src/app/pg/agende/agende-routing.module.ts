import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendePage } from './agende.page';

const routes: Routes = [
  {
    path: '',
    component: AgendePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendePageRoutingModule {}
