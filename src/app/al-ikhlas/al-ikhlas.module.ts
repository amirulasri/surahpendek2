import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlIkhlasPageRoutingModule } from './al-ikhlas-routing.module';

import { AlIkhlasPage } from './al-ikhlas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlIkhlasPageRoutingModule
  ],
  declarations: [AlIkhlasPage]
})
export class AlIkhlasPageModule {}
