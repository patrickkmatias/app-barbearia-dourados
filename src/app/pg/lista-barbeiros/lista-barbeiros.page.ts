import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../servidor/url.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-lista-barbeiros',
  templateUrl: './lista-barbeiros.page.html',
  styleUrls: ['./lista-barbeiros.page.scss'],
})
export class ListaBarbeirosPage implements OnInit {

  barbeiros:any

  constructor(public servidorUrl: UrlService, public http: HttpClient) {
    this.listarBarbeiros();
   }

  ngOnInit() {
  }

  listarBarbeiros() {

    this.http.get(this.servidorUrl.pegarUrl() + 'lista-barbeiros.php')
    .pipe(map(res => res))
    .subscribe(listaDados =>{
      this.barbeiros = listaDados
    })

  }


}
