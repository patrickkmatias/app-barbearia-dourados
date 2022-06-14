import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  url:string = "https://bdourados.000webhostapp.com/admin/"

  constructor(public http: HttpClient) { }

  pegarUrl() {
    return this.url
  }

  conectarPhp(arquivo: string, vetor: any) {  

    console.log(vetor)

    this.http.get(this.pegarUrl() + arquivo)
    .pipe(map(res => res))
    .subscribe(json =>{
      vetor = json;
      console.log(vetor)
      
    })

    console.log(vetor)

  }

  
}