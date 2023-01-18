import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlFalaqPage } from './al-falaq.page';

const routes: Routes = [
  {
    path: '',
    component: AlFalaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlFalaqPageRoutingModule {}
