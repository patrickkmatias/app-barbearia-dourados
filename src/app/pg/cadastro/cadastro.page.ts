import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UrlService } from '../../servidor/url.service';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cadastro:any;
  nome:any;
  email:any;
  senha:any;

  constructor(public servidorUrl: UrlService, 
              public http: HttpClient, 
              public nav: NavController, 
              public formConst: FormBuilder) { 

                this.cadastro = this.formConst.group({
                  nome: ['', Validators.required],
                  email: ['', Validators.required],
                  senha: ['', Validators.required]
                })

              }

  cadCliente(){

    if(this.nome == undefined || this.email == undefined || this.senha == undefined){

      this.servidorUrl.Alerta('Atenção', 'Preencha todos os campos');

    }else{

      this.cadDados(this.cadastro.value).subscribe(

        data => {
          console.log('Teste de cadastro')
        },
        err => {
          console.log('Erro de cadastro')
        }

      );

    }

  };

  cadDados(dadosCad){

    let cabecalho = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.servidorUrl.pegarUrl()+'cadastro.php', dadosCad, {
      headers: cabecalho
    }).pipe(map((res) => { return res }));
  };

  ngOnInit() {
  }

}
