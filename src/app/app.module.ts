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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    CarComponent,
    SoldComponent,
    TicketsComponent, routingComponents, CardComponent, HomeAdminComponent, AgregarProComponent, EliminarProComponent, ActualizarProComponent, VerProComponent
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
