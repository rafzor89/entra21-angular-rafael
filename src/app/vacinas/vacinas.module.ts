import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinasRoutingModule } from './vacinas-routing.module';
import { VacinasListagemComponent } from './vacinas-listagem/vacinas-listagem.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    VacinasListagemComponent
  ],
  imports: [
    CommonModule,
    VacinasRoutingModule,
    MatTableModule,
    AppMaterialModule
  ]
})
export class VacinasModule { }
