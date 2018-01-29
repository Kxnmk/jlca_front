import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../../../services/catalogos/usuarios.service';
import { Rol } from '../../../../interfaces/rolA';
import { NgForm } from '@angular/forms';
import { UsuarioC } from '../../../../interfaces/usuario';

@Component({
  selector: 'app-mod-usuario',
  templateUrl: './mod-usuario.component.html',
  styleUrls: ['./mod-usuario.component.css'],
})
export class ModUsuarioComponent implements OnInit {
  index: number;
  action: String;
  private sub: any;
  private usuario: UsuarioC;
  roles: Rol[];
  private rl: Rol;


  constructor(private route: ActivatedRoute, private router: Router, private userSer: UsuariosService ) { 
    this.roles = userSer.roles;
    console.log(this.roles);
  }

  onSubmit(f: NgForm) {
    this.usuario = new UsuarioC;
    this.usuario.usrNombre = f.value.nombreU;
    this.usuario.usrName = f.value.usuarioU;
    this.usuario.usrPassword = f.value.passU;
    this.usuario.usrRol = f.value.rolU;
    console.log(this.usuario);

    switch (this.action) {
      case 'add': {
        this.userSer.registerUser(this.usuario);
        break;
      }
      case 'edit': {
        break;
      }
      case 'delete': {
        break;
      }
    }


  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      try {
        this.index = +params['id'];
        if (this.router.url.includes('edit')) {
          this.action = 'edit';
        } else if (this.router.url.includes('delete')) {
          this.action = 'delete';
        } else if (this.router.url.includes('add')) {
          this.action = 'add';
        }

      }catch (err) {
        console.log(err);
      }
    });
  }

}
