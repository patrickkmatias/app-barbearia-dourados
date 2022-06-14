import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../servidor/url.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  barbeiros:any;

  slidesFeed = {
    grabCursor: "true",
    autoplay:{
      delay: 5500,
      disableOnInteraction: false
    },
    speed: 2500,
    loop: true
  };

  slidesBarbeiro = {
    loop: true,
    autoplay:{
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 2500
  }

  constructor(public servidorUrl: UrlService, public http: HttpClient) {
    this.listarBarbeiros();
   }

  ngOnInit() {
  }

  listarBarbeiros() {

    this.http.get(this.servidorUrl.pegarUrl() + 'home.php')
    .pipe(map(res => res))
    .subscribe(listaDados =>{
      this.barbeiros = listaDados
    })

  }
  
}
