import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router'

//Alerts
import { AlertsService } from '@jaspero/ng2-alerts'
import { Alert_settings } from '../../global-setting'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  userRol: string;
  permission1:boolean = false;


  constructor(private router: Router, private auth: AuthService, private _alert: AlertsService) {
    const rol = JSON.parse(sessionStorage.getItem('User'));
    this.userRol = rol[0].RolNombre;
    console.log(rol);
    if (this.userRol === 'ADMIN') {
      this.permission1 = true;
    }
  }

  onLogout() {
    this.auth.logOut();
    this._alert.create('success', 'Haz cerrado sesion', Alert_settings);
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
