import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../servidor/url.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  barbeiros:any

  constructor(public servidorUrl: UrlService, public http: HttpClient) {
    this.listarItens();
   }

  ngOnInit() {
  }

  listarItens() {

    this.http.get(this.servidorUrl.pegarUrl() + 'local.php')
    .pipe(map(res => res))
    .subscribe(listaDados =>{
      this.barbeiros = listaDados
    })

  }

}
