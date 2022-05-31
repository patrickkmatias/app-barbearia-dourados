import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendePageRoutingModule } from './agende-routing.module';

import { AgendePage } from './agende.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AgendePageRoutingModule
  ],
  declarations: [AgendePage]
})
export class AgendePageModule {}
