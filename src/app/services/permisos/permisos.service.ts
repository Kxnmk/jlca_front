import { Injectable } from '@angular/core';
import { Rol } from '../../interfaces/rol';

@Injectable()
export class PermisosService {
  permissos: Rol[];

  constructor() {
    this.permissos = [
      {
        url: '/Actores',
        permisoW: ['ADMIN', 'OFI_CIA', 'MES_A'],
        permisoR: ['ALL']
      },
      {
        url: '/Demandado',
        permisoW: ['ADMIN', 'OFI_CIA', 'MES_A'],
        permisoR: ['ALL']
      },
      {
        url: '/NDemanda',
        permisoW: ['OFI_CIA', 'ADMIN', 'PLENO'],
        permisoR: ['ALL']
      },
      {
        url: '/Archivos',
        permisoW: ['ALL'],
        permisoR: ['ALL']
      },
      {
        url: '/Audiencia',
        permisoW: ['MES_A', 'ADMIN', 'PLENO'],
        permisoR: ['ALL']
      },
      {
        url: '/Home',
        permisoW: ['ALL'],
        permisoR: ['ALL']
      },
      {
        url: '/Usuarios',
        permisoW: ['ADMIN'],
        permisoR: ['ADMIN']
      },
      {
        url: '/MESA',
        permisoW: ['ADMIN', 'PLENO'],
        permisoR: ['ALL']
      },
      {
        url: '/ROLES',
        permisoW: ['ADMIN', 'PLENO'],
        permisoR: ['ALL']
      },
    ];
  }
  verificarPermiso(d, p) {
    const exist = this.permissos.forEach((u) => {
      if (u.url === d) {
        u.permisoW.forEach((r) => {
          if (p === r) {
            return true;
          }
        });
      }
      return false;
    });
  }
}
