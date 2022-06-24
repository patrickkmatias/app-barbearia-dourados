import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  data: any[]

  constructor() { 
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
}
