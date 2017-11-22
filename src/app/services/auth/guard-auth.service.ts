import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {AuthService} from './auth.service';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

// Alerts
import { AlertsService } from '@jaspero/ng2-alerts';
import { Alert_settings } from '../../global-setting';

@Injectable()
export class GuardAuthService implements CanActivate {

  urlAcc: UrlAccess[];

  constructor(private authService: AuthService, private router: Router, private _alert: AlertsService) { }

  canActivate(route: ActivatedRouteSnapshot, stateURL: RouterStateSnapshot) {
    const state = this.authService.isLoggedIn();
    console.log('canactivate' + stateURL.url);

    this.initUrls();

    let AccURL = false;
    this.urlAcc.forEach((u) => {
      if (stateURL.url === '/Login') {
        return true;
      }
      const rol = JSON.parse(sessionStorage.getItem('User'));
      if ( rol === null) {
        return false;
      }
      if (stateURL.url === u.name) {
        const urlA = u.roles.forEach((a) => {
          if (rol[0].RolNombre === a) {
            AccURL = true;
          }
        });
      }
    });

    if (state) {
      if (!AccURL) {
        this._alert.create('error', 'Esta funcion No esta disponible para ti contacta con el administrador', Alert_settings);
        return false;
      }
    }else {
      this._alert.create('error', 'No estas autorizado para acceder esta url', Alert_settings);
      this.router.navigate(['/Login']);
    }
    return state;
  }

  initUrls() {
    if (this.urlAcc === undefined) {
      this.urlAcc = [
        {
          name: '/Home',
          roles: ['ADMIN', 'OFI_CIA', 'RAD_ICA', 'MES_A', 'ACT_ARIO', 'PRO_ECTA', 'PLENO']
        },
        {
          name: '/NDemanda',
          roles: ['ADMIN', 'PLENO']
        },
        {
          name: '/CDemanda',
          roles: ['ADMIN', 'OFI_CIA', 'RAD_ICA', 'MES_A', 'ACT_ARIO', 'PRO_ECTA', 'PLENO']
        },
        {
          name: '/Actores',
          roles: ['ADMIN', 'PLENO']
        },
        {
          name: '/Demandado',
          roles: ['ADMIN', 'PLENO']
        },
        {
          name: '/Mesas',
          roles: ['ADMIN', 'PLENO']
        },
        {
          name: '/Usuarios',
          roles: ['ADMIN', 'PLENO']
        },
      ];
    }
  }
}

interface UrlAccess {
  name: string;
  roles: string[];
}
