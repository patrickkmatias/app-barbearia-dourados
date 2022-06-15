import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  url:string = "https://bdourados.000webhostapp.com/admin/"

  constructor(public alerta: AlertController) { }

  pegarUrl() {
    return this.url
  }

  async Alerta(titulo, msg) {
    const alert = await this.alerta.create({
      //        cssClass: 'my-custom-class', podemos dar estilo ao alert
                header: titulo,
                message: msg,
                buttons: ['OK']
              });
          
              await alert.present();
  }

}
