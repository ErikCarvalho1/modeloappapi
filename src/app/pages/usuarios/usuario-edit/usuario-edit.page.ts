import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonBadge, IonInput } from "@ionic/angular/standalone";
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.page.html',
  styleUrls: ['./usuario-edit.page.scss'],
  standalone:false
})
export class UsuarioEditPage implements OnInit {
  for!: FormGroup;
  id!:number;
  form: any;
  router: any;
    niveis: any[]=[];
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private api: Vendas,
    private toast: ToastController
  ){}
  ngOnInit() {
    // recuperando o id que veio pela rota
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.form = this.fb.group({
      nome:['',Validators.required],
      senha:['',Validators.required],
      nivel:['',Validators.required]
    });

    this.carregar(); //carregar usuario
    this.listarNiveis();

  }
    carregar(){
      this.api.operacao({
        requisicao: 'usuario-listar',
        id_usuario: this.id
      }).subscribe((res:any)=>{
        if(res.seccess){
          this.form.patchValue({
            nome:res.data.nome,
            nivel: res.data.nivel_id,
          })
        }
      });
    }
    salvar(){
      const resquest = { 
        requisicao: 'usuario-editar',
        id_usuario: this.id,
        ...this.form.value
      }
      this.api.operacao(resquest).subscribe((res:any)=>{
        this.mensagem(res.msg);
        this.router.navigateByUrl('/usuario-liste');
      });
    }
    listarNiveis(){
  this.api.operacao({
    requisicao: 'nivel-listar'
  }).subscribe((res:any) => {
    if(res.success){
      this.niveis = res.data;
    }
  })
}

    async mensagem(msg: string){
      const t = await this.toast.create({
        message: msg,
        duration: 2000 // 2 segundos
      })
    }
}

