import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaBarbeirosPageRoutingModule } from './lista-barbeiros-routing.module';

import { ListaBarbeirosPage } from './lista-barbeiros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaBarbeirosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListaBarbeirosPage]
})
export class ListaBarbeirosPageModule {}
