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

  barbeiroItem: Array<{
    idFuncionario: any,
    nomeFuncionario: any,
    repFuncionario: any
  }>
  barbeiroItemTodos: Array<{
    idFuncionario: any,
    nomeFuncionario: any,
    repFuncionario: any
  }>

  constructor(public servidorUrl: UrlService, public http: HttpClient) {
    this.listarBarbeiros();
    this.barbeiroItem = [];
   }

  ngOnInit() {
  }

  listarBarbeiros() {

    this.http.get(this.servidorUrl.pegarUrl() + 'lista-barbeiros.php')
    .pipe(map(res => res))
    .subscribe(listaDados =>{
      this.barbeiros = listaDados

      for (let i = 0; i < this.barbeiros.length; i++) {

      this.barbeiroItem.push({
        idFuncionario:listaDados[i]['idFuncionario'],
        nomeFuncionario:listaDados[i]['nomeFuncionario'],
        repFuncionario:listaDados[i]['repFuncionario']
      });
        
      }
      this.barbeiroItemTodos = this.barbeiroItem

    })

  }

  getItems(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.barbeiroItem = this.barbeiroItemTodos.filter((barbeiros) => {
        return (barbeiros.nomeFuncionario.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.barbeiroItem = this.barbeiroItemTodos
    }


  }


}
