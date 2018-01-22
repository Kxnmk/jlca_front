import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './component/calendario/calendario.component';
import { LoginComponent } from './component/login/login.component';
import { DemandaComponent } from './component/demanda/demanda.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomeComponent } from './component/home/home.component';
import { ConDemandaComponent } from './component/con-demanda/con-demanda.component';
import { ExternalConsComponent } from './component/external-cons/external-cons.component';

// Guard
import { GuardAuthService } from './services/auth/guard-auth.service';

// Componentes

import { ActoresComponent } from './component/catalogos/actores/actores.component';
import { DemandadoComponent } from './component/catalogos/demandado/demandado.component';
import { UsuariosComponent } from './component/catalogos/usuarios/usuarios.component';
import { ArchivosComponent } from './component/archivos/archivos.component';
import { AudienciasComponent } from './component/audiencias/audiencias.component';
import { MesasComponent } from './component/catalogos/mesas/mesas.component';
import { RolesComponent } from './component/catalogos/roles/roles.component';
import { ModUsuarioComponent } from './component/catalogos/usuarios/mod-usuario/mod-usuario.component';

const APP_ROUTES: Routes = [
    { path: 'Login', component: LoginComponent },
    { path: 'ConsultaE', component: ExternalConsComponent },
    {
        path: 'Home',
        canActivate: [GuardAuthService],
        component: HomeComponent
    },
    {
        path: 'NDemanda',
        canActivate: [GuardAuthService],
        component: DemandaComponent
    },
    {
        path: 'CDemanda',
        canActivate: [GuardAuthService],
        component: ConDemandaComponent
    },
    {
        path: 'Actores',
        canActivate: [GuardAuthService],
        component: ActoresComponent
    },
    {
        path: 'Demandado',
        canActivate: [GuardAuthService],
        component: DemandadoComponent
    },
    {
        path: 'Archivos',
        canActivate: [GuardAuthService],
        component: ArchivosComponent
    },
    {
        path: 'Audiencias',
        canActivate: [GuardAuthService],
        component: AudienciasComponent
    },
    {
        path: 'Mesas',
        canActivate: [GuardAuthService],
        component: MesasComponent
    },
    {
        path: 'Usuarios',
        canActivate: [GuardAuthService],
        component: UsuariosComponent,
        canActivateChild: [GuardAuthService],
        children: [
            { path: 'Usuarios/user', component: ModUsuarioComponent }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'Login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
