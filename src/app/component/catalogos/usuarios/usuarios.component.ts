import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/catalogos/usuarios.service';
import { Usuario } from '../../../interfaces/usuario';

import { HttpClient } from '@angular/common/http';
// Alerts
import { AlertsService } from '@jaspero/ng2-alerts';
import { Alert_settings } from '../../../global-setting';

import { UrlServ } from '../../../global-setting';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private userSer: UsuariosService, private _http: HttpClient, private _alert: AlertsService) {
    this._http.get<Usuario[]>(UrlServ + '/usuarios').subscribe(
      data => {
        if (data.length !== 0) {
          this.usuarios = data;
          this.userSer.recivedata(data);
        } else {
          this._alert.create('error', 'Usuario o contraseña no valida intente de nuevo', Alert_settings);
        }
      },
      err => {
        console.log(err);
        this._alert.create('error', 'Error en el servidor');
      });
  }

  ngOnInit() {
  }


}
