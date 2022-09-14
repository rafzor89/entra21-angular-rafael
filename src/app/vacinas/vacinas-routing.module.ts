import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinasListagemComponent } from './vacinas-listagem/vacinas-listagem.component';

const routes: Routes = [
  {path: 'lista', component: VacinasListagemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinasRoutingModule { }
