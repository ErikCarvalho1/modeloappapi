import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Vendas {
  private url = "http://10.91.47.129/modelo-api/api.php";

  constructor(private http:HttpClient ){}
  // saída para o primeiro end-point
  operacao(dados:any){

    return this.http.post(this.url, dados);

    //return this.http.post(this.url + '/api-produto.php', dados); --> segunda opção 
  
  }

}
