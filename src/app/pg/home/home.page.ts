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

  barbeiro:any;
  dadosBarbeiro: Array<{
    nome: any,
    descricao: any,
    fotosPortfolio: any,
    fotoPerfil: any,
    rep: any
  }>;
  

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
    this.listarBarbeiro();
    this.dadosBarbeiro = [];
   }

  ngOnInit() {
    //verificar se está logado para tirar disclaimer para fazer cadastro
    if(localStorage.getItem('userLogado') == 'sim'){

      document.getElementById('perfilDeslogado').style.display = 'none'

    }else /* resposta nao */{

      document.getElementById('perfil').style.display = 'none'

    }

  }

  listarBarbeiro() {

    this.http.get(this.servidorUrl.pegarUrl() + 'home-barbeiro.php')
    .pipe(map(res => res))
    .subscribe(data =>{
      this.barbeiro = data;

      this.dadosBarbeiro.push({
        nome: data[0]['nomeFuncionario'],
        descricao: data[0]['descFuncionario'].slice(0, 120) + "...",
        fotosPortfolio: data[0]['fotosPortfolio'],
        fotoPerfil: data[0]['fotoFuncionario'],
        rep: data[0]['repFuncionario']
      })

      console.log(this.dadosBarbeiro)
    })

  }

  verMais() 
  {
    
  }
  
}
