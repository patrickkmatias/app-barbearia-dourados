import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  url:string = "https://bdourados.000webhostapp.com/admin/"

  constructor() { }

  pegarUrl() {
    return this.url
  }

}
