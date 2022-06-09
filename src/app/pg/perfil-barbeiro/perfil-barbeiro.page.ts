import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { UrlService } from '../../servidor/url.service';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-perfil-barbeiro',
  templateUrl: './perfil-barbeiro.page.html',
  styleUrls: ['./perfil-barbeiro.page.scss'],
})
export class PerfilBarbeiroPage implements OnInit {

  idFuncionario:any;
  dadosDetalhe:any;

  dados: Array<{
    nomeFuncionario: any
  }>;

  constructor(public dadosUrl: ActivatedRoute, 
              public servidorUrl: UrlService,
              public http:HttpClient) { 
                this.dadosUrl.params.subscribe(parametroId => {

                  this.idFuncionario = parametroId.id;
                  console.log("Meu ID Funcionario: " + this.idFuncionario);
                  this.perfilBarbeiro();      
                  this.dados = [];          
            
                });}

  perfilBarbeiro() {
    this.http.get(this.servidorUrl.pegarUrl() + 'perfil-barbeiro.php?idFuncionario=' + this.idFuncionario)
    .pipe(map(res => res))
    .subscribe(data => {
      
      this.dadosDetalhe = data;

      for(let i = 0; i < this.dadosDetalhe.length; i++){
        this.dados.push({
          nomeFuncionario:data[i]['nomeFuncionario']
        })
      }      
    })
  }

  ngOnInit() {
  }

}
