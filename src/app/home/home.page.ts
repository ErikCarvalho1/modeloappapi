import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Vendas } from '../services/vendas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
    public pedido:any = null;
    mensage = '';
  constructor(private api: Vendas) {}

  ngOnInit(){
    this.Listar()
  }

  async Listar(){
    // listar peididos 
    const peididosLista = {
      requisicao: 'pedido-listar',
      id_pedido: 10053
    }   
    // console.log(peididosLista);

    const resposta: any= await lastValueFrom(this.api.operacao(peididosLista));
    this.mensage = resposta.msg;
    this.pedido = resposta.data[0];

    
     console.log(this.pedido);

    

  }

}
