import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servidor/usuario.service';
import { UrlService } from '../../servidor/url.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  constructor(public usr: UsuarioService, public url: UrlService) { }

  ngOnInit() {
  }

}
