
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
  }

  getUsuario(id) {
  }


}
