
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinasRoutingModule } from './vacinas-routing.module';
import { VacinaListagemComponent } from './vacinas-listagem/vacinas-listagem.component';



@NgModule({
  declarations: [
    VacinaListagemComponent
  ],
  imports: [
    CommonModule,
    VacinasRoutingModule,
    AppMaterialModule
  ]
})
export class VacinasModule { }
