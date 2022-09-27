import { Observable } from 'rxjs';
import { Pesquisador } from '../app-material/model/pesquisador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
 })

 export class PesquisadorService{
   private readonly API = 'http://localhost:8083/pesquisador';

   constructor(private httpClient: HttpClient){}
     listarTodos(): Observable<Pesquisador[]>{
       return this.httpClient.get<Pesquisador[]>(this.API);
     }

 }
