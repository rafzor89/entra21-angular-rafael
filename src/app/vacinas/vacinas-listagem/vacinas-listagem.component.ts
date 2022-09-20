import { Component, OnInit } from '@angular/core';
import { Vacina } from './../../shared/app-material/model/vacina';
import { VacinasService } from '../../shared/service/vacinas.service';



@Component({
  selector: 'app-vacinas-listagem',
  templateUrl: './vacinas-listagem.component.html',
  styleUrls: ['./vacinas-listagem.component.scss']
})
export class VacinasListagemComponent implements OnInit {

  displayedColumns: string[] = ['id', 'paisOrigem'];
  public dataSource: Array<Vacina> = new Array();

  constructor(private vacinasService: VacinasService) { }

  ngOnInit(): void {
    this.buscarVacinas();
  }

  private buscarVacinas(){
    this.vacinasService.listarTodas().subscribe(
      resultado => {
        this.dataSource = resultado;
      },
      erro => {
        console.log("DEU ERRO. Causa: " + erro);
      }
    )
  }

}
