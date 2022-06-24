import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../servidor/url.service';
import { UsuarioService } from '../../servidor/usuario.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  barbeiros:any;

  slidesFeed = {
    grabCursor: "true",
    autoplay:{
      delay: 5500,
      disableOnInteraction: false
    },
    speed: 2500,
    loop: true
  };

  slidesBarbeiro = {
    loop: true,
    autoplay:{
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 2500
  }

  constructor(public servidorUrl: UrlService, public http: HttpClient, public usr: UsuarioService) {
    this.listarBarbeiros();
   }

  ngOnInit() {
    //verificar se está logado para tirar disclaimer para fazer cadastro
    if(localStorage.getItem('userLogado') == 'sim'){

      document.getElementById('perfilDeslogado').style.display = 'none'

    }else /* resposta nao */{

      document.getElementById('perfil').style.display = 'none'

    }

  }

  listarBarbeiros() {

    this.http.get(this.servidorUrl.pegarUrl() + 'home.php')
    .pipe(map(res => res))
    .subscribe(data =>{
      this.barbeiros = data
    })

  }
  
}
