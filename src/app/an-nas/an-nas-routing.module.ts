import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnNasPage } from './an-nas.page';

const routes: Routes = [
  {
    path: '',
    component: AnNasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnNasPageRoutingModule {}
