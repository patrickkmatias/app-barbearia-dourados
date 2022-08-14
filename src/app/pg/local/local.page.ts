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
    this.listarItens();
    this.barbeiroItem = [];
   }

  ngOnInit() {
  }

  listarItens() {

    this.http.get(this.servidorUrl.pegarUrl() + 'local.php')
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
      
      if(this.barbeiroItem.length == 0){
        document.getElementById('semPreferencia').classList.remove('display-none')
      }else{
        document.getElementById('semPreferencia').classList.add('display-none')
      }

    } else {
      this.barbeiroItem = this.barbeiroItemTodos
      
      document.getElementById('semPreferencia').classList.remove('display-none')
    }


  }

  selecionarLocal() {
    document.querySelector('ion-card')?.classList.add('selected')
  }

  selecionarBarbeiro() {
    document.querySelector('.avatarBarbeiro')?.classList.add('selected')
  }
}
