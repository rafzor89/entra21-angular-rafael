import { VacinasService } from './../../shared/service/vacinas.service';
import { PesquisadorService } from './../../shared/service/pesquisador.service';
import { Component, OnInit } from '@angular/core';
import { Pesquisador } from '../../shared/app-material/model/pesquisador';
import { Vacina } from '../../shared/app-material/model/vacina';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrls: ['./vacina-detalhe.component.scss']
})
export class VacinaDetalheComponent implements OnInit {

  public vacina: Vacina = new Vacina();
  public pesquisadores: Pesquisador[] = new Array();

  constructor(private pesquisadorService: PesquisadorService,
              private vacinasService: VacinasService) { }

  ngOnInit(): void {
    //TODO verificar se a rota chamada tem id
    //caso sim -> buscar a vacina no backend
    this.buscarPesquisadores();
  }

  buscarPesquisadores(){
    this.pesquisadorService.listarTodos().subscribe(
      resultado => {
        this.pesquisadores = resultado;
      },
      erro => {
        //TODO evoluir para mostrar mensagem na tela
        console.log("DEU ERRO. Causa: " + erro);
      }
    );
  }

  salvar(){
    this.vacinasService.salvar(this.vacina).subscribe(
      resultado => {
        this.vacina = resultado;
        //TODO evoluir para mostrar mensagem na tela
        alert("Vacina salva com sucesso");
        this.limpar();
      },
      erro => {
        //TODO evoluir para mostrar mensagem na tela
        console.log("DEU ERRO. Causa: " + erro);
        alert("Erro: " + erro.error.message);
      }
    );
  }

  limpar(){
    this.vacina = new Vacina();
  }
}
