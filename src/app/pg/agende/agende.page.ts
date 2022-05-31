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

  constructor(public servidorUrl: UrlService, public http: HttpClient) { 

    this.listarServicos();
  }

  ngOnInit() {
  }

  listarServicos() {

    this.http.get(this.servidorUrl.pegarUrl() + 'lista-servico.php')
    .pipe(map(res => res))
    .subscribe(listaDados => {
      this.servicos = listaDados
    })
  }

}
