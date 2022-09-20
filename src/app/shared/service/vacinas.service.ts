import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { Vacina } from '../app-material/model/vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {
  private readonly API = 'localhost:8080/api/vacina';

  constructor(private httpClient: HttpClient) { }

  listarTodas(): Observable<Vacina[]>{
    return this.httpClient.get<Vacina[]>(this.API);
  }
}
