import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/catalogos/usuarios.service';
import { Usuario } from '../../../interfaces/usuario';

import { HttpClient } from '@angular/common/http';
//Alerts
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
  uOfi: Usuario[] = [];
  uRad: Usuario[] = [];
  uMesa: Usuario[] = [];
  uAct: Usuario[] = [];
  uProy: Usuario[] = [];
  uPleno: Usuario[] = [];

  constructor(private userSer: UsuariosService, private _http: HttpClient, private _alert: AlertsService) {
    this._http.get<Usuario[]>(UrlServ + '/usuarios').subscribe(
      data => {
        if (data.length !== 0) {
          this.usuarios = data;
          this.assignUsers();
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

  assignUsers() {
    this.usuarios.forEach((u) => {
      switch (u.RolNombre) {
        case 'PLENO': {
          this.uPleno.push(u);
          break;
        }
        case 'OFI_CIA': {
          this.uOfi.push(u);
          break;
        }
        case 'RAD_ICA': {
          this.uRad.push(u);
          break;
        }
        case 'MES_A': {
          this.uMesa.push(u);
          break;
        }
        case 'ACT_ARIO': {
          this.uAct.push(u);
          break;
        }
        case 'PRO_ECTA': {
          this.uProy.push(u);
          break;
        }
      }

    });
  }

}
