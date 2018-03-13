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
    this.usuarios = new Array<Usuario>();

    const promise = new Promise((resolve, reject) => {
      
    });

  }

  ngOnInit() {
  }


}
