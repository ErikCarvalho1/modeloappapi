import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioListPageRoutingModule } from './usuario-list-routing.module';

import { UsuarioListPage } from './usuario-list.page';

@NgModule({
  declarations: [UsuarioListPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioListPageRoutingModule,
   ReactiveFormsModule
  ],

})
export class UsuarioListPageModule {}
