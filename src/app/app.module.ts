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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    CarComponent,
    SoldComponent,
    TicketsComponent, routingComponents, CardComponent
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
