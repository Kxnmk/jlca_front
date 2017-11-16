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

  onLogin(f: NgForm) {
    const user = f.value.Usuario;
    const pass = f.value.Password;

    this.auth.login(user, pass);
  }

  ngOnInit() {
  }

}
