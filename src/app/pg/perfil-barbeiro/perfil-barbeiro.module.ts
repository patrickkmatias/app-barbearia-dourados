import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilBarbeiroPageRoutingModule } from './perfil-barbeiro-routing.module';

import { PerfilBarbeiroPage } from './perfil-barbeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilBarbeiroPageRoutingModule
  ],
  declarations: [PerfilBarbeiroPage]
})
export class PerfilBarbeiroPageModule {}
