import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption } from "@ionic/angular/standalone";
import { Vendas } from 'src/app/services/vendas';


@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.page.html',
  styleUrls: ['./cliente-add.page.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonButton, IonInput, IonLabel, IonItem, IonContent, IonHeader, IonToolbar, IonTitle, IonicModule],
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
      requisicao: 'cliente-add', 
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
 