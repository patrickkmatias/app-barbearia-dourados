import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../servidor/url.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agende',
  templateUrl: './agende.page.html',
  styleUrls: ['./agende.page.scss'],
})
export class AgendePage implements OnInit {

  servicos:any

  servicoItem: Array<{
    idServico: any,
    nomeServico: any,
    valorServico: any,
    descricaoServico: any
  }>
  servicoItemTodos: Array<{
    idServico: any,
    nomeServico: any,
    valorServico: any,
    descricaoServico: any
  }>

  constructor(public servidorUrl: UrlService, public http: HttpClient) { 

    this.listarServicos();
    this.servicoItem = [];
  }

  ngOnInit() {
  }

  listarServicos() {

    this.http.get(this.servidorUrl.pegarUrl() + 'agende.php')
    .pipe(map(res => res))
    .subscribe(listaDados => {
      this.servicos = listaDados

      for (let i = 0; i < this.servicos.length; i++) {

        this.servicoItem.push({
          idServico:listaDados[i]['idServico'],
          nomeServico:listaDados[i]['nomeServico'],
          valorServico:listaDados[i]['valorComma'],
          descricaoServico:listaDados[i]['descricaoServico']
        });
          
        }
        this.servicoItemTodos = this.servicoItem

    })
  }

  getItems(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.servicoItem = this.servicoItemTodos.filter((servicos) => {
        return (servicos.nomeServico.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.servicoItem = this.servicoItemTodos
    }


  }

}
