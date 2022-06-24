import { Injectable } from '@angular/core';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  data: any[]

  constructor(public url: UrlService) { 
    this.data = [];
    this.setValues();
  }

  setValues(){
    this.data.push(
      localStorage.getItem('idCliente'),
      localStorage.getItem('nomeCliente'),
      localStorage.getItem('emailCliente'),
      localStorage.getItem('numeroCliente'),
      localStorage.getItem('fotoCliente'),
      localStorage.getItem('dataCadCliente'),
    );
  }

  fotoPerfil(){

    if(this.data[4] == 'cliente/user.png')
    {
      return "../../../assets/icon/iconAvatar.png";
    }else{
      return this.url.pegarUrl()+'perfil-cliente/'+this.data[4];
    }
  }
}
