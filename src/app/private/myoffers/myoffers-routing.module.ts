import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyoffersPage } from './myoffers.page';

const routes: Routes = [
  {
    path: '',
    component: MyoffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyoffersPageRoutingModule {}
