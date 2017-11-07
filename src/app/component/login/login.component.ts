import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth/auth.service'
import { Router } from '@angular/router'

//Alerts
import { AlertsService } from '@jaspero/ng2-alerts'
import { Alert_settings } from '../../global-setting'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onLogin(f: NgForm){
    var user = f.value.Usuario;
    var pass = f.value.Password;
    AuthService.prototype.login(user, pass);
    var state = AuthService.prototype.isLoggedIn();
    if(state){
      this.router.navigate(['/Home']);
    }
    else{
      this._alert.create('error', "Usuario o contraseña no valida intente de nuevo", Alert_settings);
    }
  }

  constructor(private router: Router, private auth: AuthService, private _alert: AlertsService) { 
    if(auth.isLoggedIn()){
      this.router.navigate(['/Home']);
    }
    

  }

  ngOnInit() {
  }

}
