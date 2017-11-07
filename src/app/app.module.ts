import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { CalendarioComponent } from './component/calendario/calendario.component';
import { LoginComponent } from './component/login/login.component';
import { DemandaComponent } from './component/demanda/demanda.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomeComponent } from './component/home/home.component';
import { ExternalConsComponent } from './component/external-cons/external-cons.component'

import { FormsModule } from '@angular/forms';

//Calendario
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

//Auth
import { AuthService } from './services/auth/auth.service';
import { GuardAuthService } from './services/auth/guard-auth.service'

//Alerts
import { JasperoAlertsModule } from '@jaspero/ng2-alerts';
import { ConDemandaComponent } from './component/con-demanda/con-demanda.component';

//Permisos
import { PermisosService } from './services/permisos/permisos.service';

//Catalogos
import { ActoresComponent } from './component/catalogos/actores/actores.component';
import { DemandadoComponent } from './component/catalogos/demandado/demandado.component';
import { UsuariosComponent } from './component/catalogos/usuarios/usuarios.component';
import { ArchivosComponent } from './component/archivos/archivos.component';
import { AudienciasComponent } from './component/audiencias/audiencias.component';
import { MesasComponent } from './component/catalogos/mesas/mesas.component';
import { RolesComponent } from './component/catalogos/roles/roles.component';

// HTTP Request
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    LoginComponent,
    DemandaComponent,
    NavBarComponent,
    HomeComponent,
    ExternalConsComponent,
    ConDemandaComponent,
    ActoresComponent,
    DemandadoComponent,
    UsuariosComponent,
    ArchivosComponent,
    AudienciasComponent,
    MesasComponent,
    RolesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    JasperoAlertsModule,
    HttpClientModule
  ],
  exports:[],
  providers: [
    AuthService,
    GuardAuthService,
    PermisosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
