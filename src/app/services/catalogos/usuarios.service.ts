
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Alerts
import { AlertsService } from '@jaspero/ng2-alerts';
import { Alert_settings } from '../../global-setting';

import { Usuario } from '../../interfaces/usuario';
import { Rol } from '../../interfaces/rolA';

import { UrlServ } from '../../global-setting';

import { Router } from '@angular/router';

@Injectable()
export class UsuariosService {

  usuarios: Usuario[];
  roles: Rol[];


  constructor(private _http: HttpClient, private _alert: AlertsService) {
  }

  recivedata(users) {
    this.usuarios = users;
  }

  registerUser(user) {
    console.log(user);
    // const body = { name: 'Brad' };
    // this._http.post<any>(UrlServ + '/usuarios', user).subscribe(
    //   data => {
    //     if (data.length !== 0) {
    //       this._alert.create('success', 'Usuario Registrado con exito' , Alert_settings);
    //     } else {
    //       this._alert.create('error', 'Usuario o contraseña no valida intente de nuevo', Alert_settings);
    //     }
    //   },
    //   err => {
    //     console.log(err);
    //     this._alert.create('error', 'Error en el servidor');
    //   });
  }
  editUser() {
  }

  getUsuario(id) {
  }

  getRoles() {
    this._http.get<Rol[]>(UrlServ + '/roles').subscribe(
      data => {
        if (data.length !== 0) {
          this.roles = data;
        } else {
          this._alert.create('error', 'Usuario o contraseña no valida intente de nuevo', Alert_settings);
        }
      },
      err => {
        console.log(err);
        this._alert.create('error', 'Error en el servidor');
      });
  }


}
