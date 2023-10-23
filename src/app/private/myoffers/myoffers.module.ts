import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyoffersPageRoutingModule } from './myoffers-routing.module';

import { MyoffersPage } from './myoffers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyoffersPageRoutingModule
  ],
  declarations: [MyoffersPage]
})
export class MyoffersPageModule {}
