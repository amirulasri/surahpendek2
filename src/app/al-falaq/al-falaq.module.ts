import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlFalaqPageRoutingModule } from './al-falaq-routing.module';

import { AlFalaqPage } from './al-falaq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlFalaqPageRoutingModule
  ],
  declarations: [AlFalaqPage]
})
export class AlFalaqPageModule {}
