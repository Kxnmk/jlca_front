import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

//Alerts
import { AlertsService } from '@jaspero/ng2-alerts';
import { Alert_settings } from '../../global-setting';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {
    if (auth.isLoggedIn()) {
      this.router.navigate(['/Home']);
    }

  }

  onLogin(f: NgForm){
    const user = f.value.Usuario;
    const pass = f.value.Password;

    this.auth.login(user, pass);

    // if (this.auth.isLoggedIn()) {
    //   this.router.navigate(['/Home']);
    // }else {
    //   this._alert.create('error', 'Usuario o contraseña no valida intente de nuevo', Alert_settings);
    // }

    // this.auth.login(user, pass).subscribe(state => {
    //   if (state) {
    //     this.router.navigate(['/Home']);
    //   }else {
    //     this._alert.create('error', 'Usuario o contraseña no valida intente de nuevo', Alert_settings);
    //   }
    // });
  }

  ngOnInit() {
  }

}
