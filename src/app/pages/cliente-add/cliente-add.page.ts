import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.page.html',
  styleUrls: ['./cliente-add.page.scss'],
})
export class ClienteAddPage implements OnInit {
   form!:FormGroup;

  constructor( private fb: FormBuilder,
    private api: Vendas,
    private toast: ToastController) { }

  ngOnInit() {
       this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      datanasc: ['', Validators.required]
     
    });
  }
   salvar(){
    const request = {
      requisicao: 'usuario-add', 
      ...this.form.value
    };
    this.api.operacao(request).subscribe((res:any)  => {
      this.mensagem(res.msg);
      if(res.success){
        this.form.reset()
      }
    });
  }    
  async mensagem(msg: string){
  const t = await this.toast.create({
    message: msg,
    duration: 2000
  });
  t.present();
}
  


}


// {
//   "requisicao": "cliente-add",
//   "nome": "",
//   "cpf": "",
//   "telefone": "",
//   "email": "",
//   "datanasc": "YYYY-MM-DD"
// }
 