import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../servidor/url.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  barbeiros:any

  constructor(public servidorUrl: UrlService) {
    servidorUrl.conectarPhp('local.php', 'this.barbeiros');
   }


  ngOnInit() {
  }

}
