import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'al-qadr',
    loadChildren: () => import('./al-qadr/al-qadr.module').then( m => m.AlQadrPageModule)
  },
  {
    path: 'an-nas',
    loadChildren: () => import('./an-nas/an-nas.module').then( m => m.AnNasPageModule)
  },
  {
    path: 'al-falaq',
    loadChildren: () => import('./al-falaq/al-falaq.module').then( m => m.AlFalaqPageModule)
  },
  {
    path: 'al-kafirun',
    loadChildren: () => import('./al-kafirun/al-kafirun.module').then( m => m.AlKafirunPageModule)
  },
  {
    path: 'al-ikhlas',
    loadChildren: () => import('./al-ikhlas/al-ikhlas.module').then( m => m.AlIkhlasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
