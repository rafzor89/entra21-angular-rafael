import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinaListagemComponent } from './vacinas-listagem/vacinas-listagem.component';
import { VacinaDetalheComponent } from './vacina-detalhe/vacina-detalhe.component';


const routes: Routes = [
  {path: '', component: VacinaListagemComponent},
  {path: 'detalhe', component: VacinaDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinasRoutingModule { }
