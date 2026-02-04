import { Injectable } from '@angular/core';
import { Vendas } from './vendas';

@Injectable({
  providedIn: 'root',
})
export class Auth {
    constructor(private api:Vendas){
      
    }

    login(email:string, senha: string){
      return this.api.operacao({}).subscribe(()=>{})
    }

    logout(){}

    setUsuairo(){}
    
    getUsuario(){}

    isLogado():boolean{
      return true;
    }
  }
