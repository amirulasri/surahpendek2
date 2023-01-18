import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlKafirunPageRoutingModule } from './al-kafirun-routing.module';

import { AlKafirunPage } from './al-kafirun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlKafirunPageRoutingModule
  ],
  declarations: [AlKafirunPage]
})
export class AlKafirunPageModule {}
