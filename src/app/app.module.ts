import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './headers/sidebar/sidebar.component';
import { HomeComponent } from './views/home/home.component';
import { CarComponent } from './views/car/car.component';
import { SoldComponent } from './views/sold/sold.component';
import { TicketsComponent } from './views/tickets/tickets.component';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeAdminComponent } from './views/home-admin/home-admin.component';
import { AgregarProComponent } from './views/adm-producto/agregar-pro/agregar-pro.component';
import { EliminarProComponent } from './views/adm-producto/eliminar-pro/eliminar-pro.component';
import { ActualizarProComponent } from './views/adm-producto/actualizar-pro/actualizar-pro.component';
import { VerProComponent } from './views/adm-producto/ver-pro/ver-pro.component';
import { AgregarEmpComponent } from './views/adm-empleado/agregar-emp/agregar-emp.component';
import { VerEmpComponent } from './views/adm-empleado/ver-emp/ver-emp.component';
import { ActualizarEmpComponent } from './views/adm-empleado/actualizar-emp/actualizar-emp.component';
import { LoginComponent } from './views/logins/login/login.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { PedidoEstComponent } from './views/pedido-est/pedido-est.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    CarComponent,
    SoldComponent,
    TicketsComponent, routingComponents, CardComponent, HomeAdminComponent,
    AgregarProComponent, EliminarProComponent, ActualizarProComponent, VerProComponent,
    AgregarEmpComponent, VerEmpComponent, ActualizarEmpComponent, LoginComponent, PedidosComponent, PedidoEstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
