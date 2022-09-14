import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const VACINAS_MOCK: Vacina[] = [
  {id: 1, paisOrigem: 'Brasil'},
  {id: 2, paisOrigem: 'Argentina'},
  {id: 3, paisOrigem: 'Paraguai'},
  {id: 4, paisOrigem: 'Chile'}

];

@Component({
  selector: 'app-vacinas-listagem',
  templateUrl: './vacinas-listagem.component.html',
  styleUrls: ['./vacinas-listagem.component.scss']
})
export class VacinasListagemComponent implements OnInit {

  displayedColumns: string[] = ['id', 'paisOrigem'];
  dataSource = VACINAS_MOCK;
  clickedRows = new Set<PeriodicElement>();
  constructor() { }

  ngOnInit(): void {
  }

}
