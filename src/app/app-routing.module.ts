import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {CarComponent} from "./views/car/car.component";
import {SoldComponent} from "./views/sold/sold.component";
import {TicketsComponent} from "./views/tickets/tickets.component";

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent, data:{title: 'Comidas a tus horas'}},
  {path: 'pedidos', component: CarComponent, data: {title: 'Realiza tu pedido aqui'}},
  {path: 'ventas', component: SoldComponent, data: {title: 'Carrito de compras'}},
  {path: 'comprobantes', component: TicketsComponent, data: {title: 'Tus comprobantes'}},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, CarComponent, SoldComponent, TicketsComponent];
