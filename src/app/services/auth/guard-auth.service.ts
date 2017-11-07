import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {AuthService} from './auth.service';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

//Alerts
import { AlertsService } from '@jaspero/ng2-alerts';
import { Alert_settings } from '../../global-setting';

@Injectable()
export class GuardAuthService implements CanActivate {

  urlAcc: urlAccess[];

  constructor(private authService: AuthService, private router: Router, private _alert: AlertsService) { }

  canActivate(route: ActivatedRouteSnapshot, stateURL: RouterStateSnapshot) {
    let state = this.authService.isLoggedIn();

    this.initUrls();

    let AccURL = false;
    this.urlAcc.forEach((u)=>{
      if (stateURL.url == u.name){
        let urlA = u.roles.forEach((a) => {
          if (sessionStorage.getItem("Rol") == a) {
            AccURL = true;
          }
        })
      }
    })

    if(state){
      if (!AccURL) {
        this._alert.create('error', "Esta funcion No esta disponible para ti contacta con el administrador", Alert_settings);
        return false;
      }
    }else{
      this._alert.create('error', 'No estas autorizado para acceder esta url', Alert_settings);
      this.router.navigate(['/Login'])
    }
    return state
  }

  initUrls(){
    if(this.urlAcc==undefined){
      this.urlAcc = [
        {
          name: "/Login",
          roles: ["ADMIN", "OFI_CIA", "RAD_ICA", "MES_A", "ACT_ARIO", "PRO_ECTA", "PLENO"]
        },
        {
          name: "/Home",
          roles: ["ADMIN", "OFI_CIA", "RAD_ICA", "MES_A", "ACT_ARIO", "PRO_ECTA", "PLENO"]
        },
        {
          name:"/NDemanda",
          roles: ["ADMIN","PLENO"]
        },
        {
          name: "/CDemanda",
          roles: ["ADMIN", "PLENO"]
        }
      ]
    }
  }
}

interface urlAccess {
  name: string;
  roles: string[];
}
