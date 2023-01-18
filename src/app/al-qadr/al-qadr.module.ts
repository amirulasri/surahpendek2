import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlQadrPageRoutingModule } from './al-qadr-routing.module';

import { AlQadrPage } from './al-qadr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlQadrPageRoutingModule
  ],
  declarations: [AlQadrPage]
})
export class AlQadrPageModule {}
