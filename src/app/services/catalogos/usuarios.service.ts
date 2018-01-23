
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Alerts
import { AlertsService } from '@jaspero/ng2-alerts';
import { Alert_settings } from '../../global-setting';

import { Usuario } from '../../interfaces/usuario';

import { UrlServ } from '../../global-setting';

@Injectable()
export class UsuariosService {

  usuarios: Usuario[];
  uOfi: Usuario[] = [];
  uRad: Usuario[] = [];
  uMesa: Usuario[] = [];
  uAct: Usuario[] = [];
  uProy: Usuario[] = [];
  uPleno: Usuario[] = [];


  constructor(private _http: HttpClient, private _alert: AlertsService) {
  }

  recivedata(users) {
    this.usuarios = users;
    this.assignUsers();
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

  getUsuario(id) {
  }


}
