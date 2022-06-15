import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../servidor/url.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  senha:string;

  constructor(public servidorUrl: UrlService, public http: HttpClient) {

    this.email = "patrickmatias.silva@hotmail.com";
    this.senha = "irineu";

   }

  ngOnInit() {
  }
  
  async logar(){
    if(this.email == "" || this.senha == ""){
      console.log("Preencha todos os campos.");
      
      this.servidorUrl.Alerta('Opa!','Preencha todos os campos.')

    }else{

      this.http.get(this.servidorUrl.pegarUrl() + 'login.php?email=' + this.email + '&senha=' + this.senha)
      .pipe(map(rep => rep))
      .subscribe(data => {
        
      })

    }
  }

}
