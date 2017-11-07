import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AuthService {
  state: boolean;
  usuarios: Usuario[];

  private url: string = 'http://localhost:8080/api/usuarios';
  isLoggedIn() {
    if (sessionStorage.getItem('Session')){
      this.state = true;
    }
    return this.state;
  }

  login(usuario, password) {
    this.state = false;
    this.initUsers();
    //console.log(this.checkLogin(usuario, password));

     const exist = this.usuarios.forEach((u) => {
      if (u.user === usuario && u.pass === password) {
        this.state = true;
        sessionStorage.setItem('Session', usuario);
        sessionStorage.setItem('Rol', u.rol);
      }
    });
  }

  checkLogin(usuario, password): Observable<Usuario> {
    return this.http.get<Usuario>(this.url);
  }

  logOut() {
    this.state = false;
    sessionStorage.removeItem('Session');
    sessionStorage.removeItem('Rol');
  }


  initUsers() {
    // this.http.get('/api/items').subscribe(data => {
    //   // Read the result field from the JSON response.
    //   console.log(data);
    // });
    if (this.usuarios === undefined) {
      this.usuarios = [
        { user: 'admin', pass: '1234', rol: 'ADMIN' },
        { user: 'oficialia', pass: '2345', rol: 'OFI_CIA' },
        { user: 'radicacion', pass: '1234', rol: 'RAD_ICA' },
        { user: 'mesa', pass: '1234', rol: 'MES_A' },
        { user: 'actuario', pass: '1234', rol: 'ACT_ARIO' },
        { user: 'proyectista', pass: '1234', rol: 'PRO_ECTA' },
        { user: 'pleno', pass: '1234', rol: 'PLENO' },
      ];
    }
  }

  constructor(public http: HttpClient) {
    // this.http.get(this.url).subscribe(data => {
    //   console.log(data);
    // });

  }

}


