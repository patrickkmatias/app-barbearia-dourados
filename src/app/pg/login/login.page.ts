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
    this.senha = "irineu";

   }

  ngOnInit() {

    document.getElementById('ion-tab-bar').style.display = 'none';
    document.getElementById('video')?.setAttribute('autoplay','true')

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
            this.nav.navigateBack('/tabs/pg/home');
          }
          
        }else{

          this.servidorUrl.Alerta('Opa!','Senha e/ou email/número incorreto!')
          
        }
      })

    }
  }

}
