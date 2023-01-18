import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnNasPageRoutingModule } from './an-nas-routing.module';

import { AnNasPage } from './an-nas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnNasPageRoutingModule
  ],
  declarations: [AnNasPage]
})
export class AnNasPageModule {}
