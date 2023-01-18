import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlIkhlasPage } from './al-ikhlas.page';

const routes: Routes = [
  {
    path: '',
    component: AlIkhlasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlIkhlasPageRoutingModule {}
