import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'home',
    loadChildren: () => import('./public/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./public/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'add-offer',
    loadChildren: () => import('./private/add-offer/add-offer.module').then( m => m.AddOfferPageModule)
  },
  {
    path: 'myoffers',
    loadChildren: () => import('./private/myoffers/myoffers.module').then( m => m.MyoffersPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./private/profil/profil.module').then( m => m.ProfilPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
