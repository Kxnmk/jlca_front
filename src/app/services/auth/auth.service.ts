import { Usuario } from './../../interfaces/usuario';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';


import { UrlServ } from '../../global-setting';

import { Router } from '@angular/router';
//Alerts
import { AlertsService } from '@jaspero/ng2-alerts';
import { Alert_settings } from '../../global-setting';



@Injectable()
export class AuthService {
  state: boolean;
  usuarios: Usuario[];
  uLog: Usuario[];
  private url;

  constructor(private _http: HttpClient, private router: Router, private _alert: AlertsService) {
    this.state = false;
  }


  isLoggedIn() {
    if (sessionStorage.getItem('User')) {
      this.state = true;
    }
    return this.state;
  }


  login(usuario, password){
    const cred = { usrName: usuario, usrPassword: password};

    console.log(UrlServ + '/usuarios/auth');
    this._http.post<Usuario[]>(UrlServ + '/usuarios/auth', cred).subscribe(
      data => {
        if (data.length !== 0) {
          this.uLog = data;
          console.log(this.uLog);
          sessionStorage.setItem('User', JSON.stringify(this.uLog[0]));
          this.router.navigate(['/Home']);
        }else {
          this._alert.create('error', 'Usuario o contraseña no valida intente de nuevo', Alert_settings);
        }
      },
      err => {
        console.log(err);
        this._alert.create('error', 'Error en el servidor');
      });
  }



  logOut() {
    this.state = false;
    sessionStorage.removeItem('User');
  }



}


