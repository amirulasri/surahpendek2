import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlQadrPage } from './al-qadr.page';

const routes: Routes = [
  {
    path: '',
    component: AlQadrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlQadrPageRoutingModule {}
