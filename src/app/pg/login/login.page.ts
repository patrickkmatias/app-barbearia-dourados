import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../servidor/url.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  senha:string;
  dadosLogin: any;

  constructor(public servidorUrl: UrlService, public http: HttpClient, public nav: NavController) {

    this.email = "patrickmatias.silva@hotmail.com";
    this.senha = "patrikinho123";

   }

  ngOnInit() {

    document.getElementById('ion-tab-bar').style.display = 'none';
    document.getElementById('video')?.setAttribute('autoplay','true');

    if(localStorage.getItem('userLogado') != 'sim'){
      localStorage.setItem('userLogado', 'nao');
    }

  }
  
  async logar(){
    if(this.email == "" || this.senha == ""){
      
      this.servidorUrl.Alerta('Opa!','Preencha todos os campos.')

    }else{

      this.http.get(this.servidorUrl.pegarUrl() + 'login.php?email=' + this.email + '&senha=' + this.senha)
      .pipe(map(rep => rep))
      .subscribe(data => {
        
        this.dadosLogin = data;

        if (this.dadosLogin[0].msg.logado == 'Sim') {

          if (this.dadosLogin[0].Dados.statusCliente == 'ATIVO') {
            this.servidorUrl.Alerta('Login bem-sucedido.','Pronto pro corte!');
            this.armazenarLogin();
            this.nav.navigateBack('/tabs/pg/home');
          }
          
        }else{

          this.servidorUrl.Alerta('Opa!','Senha e/ou email/número incorreto!')
          
        }
      })

    }
  }

  armazenarLogin(){
    localStorage.setItem('idCliente', this.dadosLogin[0].Dados.idCliente);
    localStorage.setItem('nomeCliente', this.dadosLogin[0].Dados.nomeCliente);
    localStorage.setItem('emailCliente', this.dadosLogin[0].Dados.emailCliente);
    localStorage.setItem('statusCliente', this.dadosLogin[0].Dados.statusCliente);
    localStorage.setItem('fotoCliente', this.dadosLogin[0].Dados.fotoCliente);
    localStorage.setItem('dataCadCliente', this.dadosLogin[0].Dados.dataCadCliente);
    localStorage.setItem('userLogado', 'sim');
  }

}
