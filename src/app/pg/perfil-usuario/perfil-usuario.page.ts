import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servidor/usuario.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  constructor(public usr: UsuarioService, public nav: NavController) {console.log(this.usr.data) }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    localStorage.setItem('userLogado', 'nao');
    this.nav.navigateBack('/tabs/pg/login');
  }


}
