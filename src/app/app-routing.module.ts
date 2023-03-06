import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {CarComponent} from "./views/car/car.component";
import {SoldComponent} from "./views/sold/sold.component";
import {TicketsComponent} from "./views/tickets/tickets.component";
import {HomeAdminComponent} from "./views/home-admin/home-admin.component";
import {AgregarProComponent} from "./views/adm-producto/agregar-pro/agregar-pro.component";
import {VerProComponent} from "./views/adm-producto/ver-pro/ver-pro.component";
import {ActualizarProComponent} from "./views/adm-producto/actualizar-pro/actualizar-pro.component";
import {ActualizarEmpComponent} from "./views/adm-empleado/actualizar-emp/actualizar-emp.component";
import {AgregarEmpComponent} from "./views/adm-empleado/agregar-emp/agregar-emp.component";
import {VerEmpComponent} from "./views/adm-empleado/ver-emp/ver-emp.component";
import {LoginComponent} from "./views/logins/login/login.component";
import {PedidosComponent} from "./views/pedidos/pedidos.component";
import {PedidoEstComponent} from "./views/pedido-est/pedido-est.component";

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent, data:{title: 'Comidas a tus horas'}},
  {path: 'pedidos', component: CarComponent, data: {title: 'Realiza tu pedido aqui'}},
  {path: 'ventas', component: SoldComponent, data: {title: 'Carrito de compras'}},
  {path: 'comprobantes', component: TicketsComponent, data: {title: 'Tus comprobantes'}},
  {path: 'home-admin', component: HomeAdminComponent, data: {title: 'Tus comprobantes'}},
  {path: 'agregar-producto', component: AgregarProComponent, data: {title: 'Tus comprobantes'}},
  {path: 'actualizar-producto', component: ActualizarProComponent, data: {title: 'Tus comprobantes'}},
  {path: 'ver-producto', component: VerProComponent, data: {title: 'Tus comprobantes'}},
  {path: 'actualizar-empleado', component: ActualizarEmpComponent, data: {title: 'Tus comprobantes'}},
  {path: 'agregar-empleado', component: AgregarEmpComponent, data: {title: 'Tus comprobantes'}},
  {path: 'ver-empleado', component: VerEmpComponent, data: {title: 'Tus comprobantes'}},
  {path: 'ver-empleado', component: VerEmpComponent, data: {title: 'Tus comprobantes'}},
  {path: 'pedidos-emp', component: PedidosComponent, data: {title: 'Tus comprobantes'}},
  {path: 'home-emp', component: PedidoEstComponent, data: {title: 'Tus comprobantes'}},

  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, CarComponent, SoldComponent, TicketsComponent, HomeAdminComponent,
  AgregarProComponent, VerProComponent, ActualizarProComponent,
  AgregarEmpComponent,ActualizarEmpComponent,VerEmpComponent,
  PedidosComponent, PedidoEstComponent];
