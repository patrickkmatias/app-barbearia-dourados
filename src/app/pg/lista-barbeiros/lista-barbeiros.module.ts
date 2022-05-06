import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaBarbeirosPageRoutingModule } from './lista-barbeiros-routing.module';

import { ListaBarbeirosPage } from './lista-barbeiros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaBarbeirosPageRoutingModule
  ],
  declarations: [ListaBarbeirosPage]
})
export class ListaBarbeirosPageModule {}
