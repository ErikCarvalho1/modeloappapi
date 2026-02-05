import { Injectable } from '@angular/core';
import { Vendas } from './vendas';

@Injectable({
  providedIn: 'root',
})
export class Auth {
    constructor(private api:Vendas){
      
    }

    login(email:string, senha: string){
      return this.api.operacao({
        requisicao: 'login',
        email: email,
        senha: senha
      })
    }

    logout(){
      localStorage.removeItem('usuario');

    }

    setUsuario(dados:any){
      localStorage.setItem('usuairo', JSON.stringify(dados));
    }
    
    getUsuario(){
      return JSON.parse(localStorage.getItem('usuario') || 'null')
    }

    isLogado():boolean{
      return !!this.getUsuario();
    }
  }
