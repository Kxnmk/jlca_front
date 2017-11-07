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
    this.userRol = sessionStorage.getItem("Rol");
    if (this.userRol == "ADMIN") {
      this.permission1 = true;
    }
  }

  onLogout(){
    this.auth.logOut();
    this._alert.create('success', "Haz cerrado sesion", Alert_settings);
    this.router.navigate(['/login']);
    
  }

  ngOnInit() {
  }

}
